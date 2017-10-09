const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const styles = require('./styles');
const setup = require('./setup');
const path = require('path');
const dist = join(__dirname, '..', 'dist');
const exclude = /(node_modules|bower_components)/;

module.exports = env => {
	const isProd = env && env.production;
	if(!isProd) { styles.unshift({ loader:'style-loader' }); }

	return {
		entry: {
			app: './src/index.js',
			vendor: [
				// pull these to a `vendor.js` file
				'preact'
			]
		},
		output: {
			path: dist,
			filename: '[name].[hash].js',
			publicPath: '/'
		},
		resolve: {
			extensions: ['.jsx', '.js', '.json', '.less'],
			alias: {
				components: path.resolve(__dirname, "src/components"),    // used for tests
				style: path.resolve(__dirname, "src/style"),
				'react': 'preact-compat',
				'react-dom': 'preact-compat'
			}
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: exclude,
				use: 'babel-loader'
			}, {
				test: /\.(css|sass|scss)$/,
				use: isProd ? ExtractText.extract({ fallback:'style-loader', use:styles }) : styles
			}, {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }]
		},
		plugins: setup(isProd),
		devtool: !isProd && 'eval',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
