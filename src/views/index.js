import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from './components/Layout';

import Home from './pages/Home';
import Article from './pages/Article';
import Credit from './pages/Credit';
import Blog from './pages/Blog';

import InstallOverlay from './components/InstallOverlay';
import Snackbar from './components/Snackbar';

import Error404 from './pages/errors/404';

// Track pages on route change
const onChange = (obj) => {
}

export default (
	<div>
		<Layout>
			<Router onChange={ onChange }>
				<Home path="/" />
				<Blog path="/blog" />
				<Article path="/blog/:title" />
				<Credit path="/credit" />
				<Error404 default />
			</Router>

			<Snackbar timeout={6000} />
		</Layout>

		{ localStorage.getItem('pref_overlay') !== 'true' ?
			<InstallOverlay /> : ''
	  }
	</div>
);

const showInstallOverlay = () => {
	console.log('lol');
}
