const { join } = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
const uglify = require('./uglify');

const root = join(__dirname, '..');

module.exports = isProd => {
	// base plugins array
	const plugins = [
		new Clean(['dist'], { root }),
		new Copy([{ context: 'src/static/', from: '**/*.*' }]),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new HTML({ template: 'src/index.html' }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
		})
	];

	if (isProd) {
		plugins.push(
			new webpack.LoaderOptionsPlugin({ minimize:true }),
			new webpack.optimize.UglifyJsPlugin(uglify),
			new ExtractText('styles.[hash].css'),
			new OfflinePlugin({
				excludes: ['**/*.map'],
			  updateStrategy: 'changed',
			  autoUpdate: 1000 * 60 * 1,
			  ServiceWorker: {
			    events: true,
			    navigateFallbackURL: '/',
			  },
			})
		);
	} else {
		// dev only
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		);
	}

	return plugins;
};
