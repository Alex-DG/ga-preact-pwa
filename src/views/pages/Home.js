import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Card from '../components/Card';

export default class Home extends Component {
	render() {
		return (
			<div className="page page__home">
				<Card>
					<h1>Home</h1>
					<p>This is the home page.</p>

					<p>You should check out:</p>
					<nav>
						<Link href="/foo">Foo</Link>
						<Link href="/foo/bar">Foo/Bar</Link>
					</nav>
				</Card>

				<Card>
					<h2>Progressive Web App ~ [Preact]</h2>
					<p>Moshimoshi Beerus-sama</p>
				</Card>

			</div>
		)
	}
}
