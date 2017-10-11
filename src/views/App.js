import { h, Component } from 'preact'
import { Router } from 'preact-router';

import { getConfigSample } from '../utils/api';

import Layout from './components/Layout';

import Home from './pages/Home';
import Article from './pages/Article';
import Credit from './pages/Credit';
import Blog from './pages/Blog';

import InstallOverlay from './components/InstallOverlay';
import Snackbar from './components/Snackbar';

import Error404 from './pages/errors/404';

export default class App extends Component {

	constructor() {
		super();
		this.handleRoute = (e) => {
			this.currentUrl = e.url; // The newly routed URL
		};
	}

	componentDidMount() {
		// TODO: just playing with Hapi....
		getConfigSample().then(data => console.log(data));
	}

	render() {
		return (
			<Layout>
				<Router onChange={ this.handleRoute }>
					<Home path="/" />
					<Blog path="/blog" />
					<Article path="/blog/:title" />
					<Credit path="/credit" />
					<Error404 default />
				</Router>
			</Layout>
		);
	}
}
