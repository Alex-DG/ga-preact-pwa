import { h, Component } from 'preact'
import { Router } from 'preact-router';

//import { getConfigSample } from '../utils/api';

import Layout from './components/Layout';

import Home from './pages/Home';
import Article from './pages/Article';
import Credit from './pages/Credit';
import Blog from './pages/Blog';
import View from './pages/View';

import InstallOverlay from './components/InstallOverlay';
import Snackbar from './components/Snackbar';

import Error404 from './pages/errors/404';

import ImgLink from '../static/icon/gearedapp-logo-192x192.png';

export default class App extends Component {

	constructor() {
		super();
		this.handleRoute = (e) => {
			//console.log('handleRoute');
			this.currentUrl = e.url; // The newly routed URL
		};
	}

	componentDidMount() {
		// setInterval(() => {
    //     console.log('bob')
    //    }, 1000);
		// TODO: just playing with Hapi....
		//getConfigSample().then(data => console.log(data));
	}

	render() {
		const instanceSamples = [
			{
				_id: 'qw875cqqw',
				component_type: {
					name: 'Title',
				},
				props: {
					children: 'Batman'
				}
			},{
				_id: 'qw875cwwqqw',
				component_type: {
					name: 'Title',
				},
				props: {
					children: 'Joker'
				}
			},{
				_id: 'qw875scwwqqw',
				component_type: {
					name: 'Image',
				},
				props: {
					children: 'http://www.legobatman.com/assets/media/games/batman.png'
				}
			},
		];

		return (
			<Layout>
				<Router onChange={ this.handleRoute }>
					<Home path="/" />
					<Blog path="/blog" />
					<Article path="/blog/:title" />
					{/* <Credit path="/credit" /> */}
					<View path="/view" instances={instanceSamples}/>
					<Error404 default />
				</Router>
			</Layout>
		);
	}
}
