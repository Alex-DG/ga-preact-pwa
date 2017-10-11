import { h } from 'preact';
import Header from './Header';
import InstallOverlay from './InstallOverlay';
import Snackbar from './Snackbar';

export default function (props) {
	return (
		<div id="app">
			<Header />
			<main id="content">
				{ props.children }
			</main>

			<Snackbar timeout={6000} />

			{ localStorage.getItem('pref_overlay') !== 'true' ?
				<InstallOverlay /> : <div class="bob"></div>
			}
		</div>
	);
}
