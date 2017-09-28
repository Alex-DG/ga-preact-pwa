import { h } from 'preact'
import { Router } from 'preact-router';

import Home from './pages/Home';
import Layout from './components/Layout';
import Snackbar from './components/Snackbar';
import Article from './pages/Article';
import Error404 from './pages/errors/404';
import Credit from './pages/Credit';
import Blog from './pages/Blog';

// Track pages on route change
const onChange = (obj) => {
}

export default (
	<Layout>
		<Router onChange={ onChange }>
			<Home path="/" />
			<Blog path="/blog" />
			<Article path="/blog/:title" />
			<Credit path="/credit" />
			<Error404 default />
		</Router>

		<Snackbar timeout={5000} />

	</Layout>
);
