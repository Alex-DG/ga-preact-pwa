import { h, render } from 'preact';
import { doc, emit } from './views/shared';
import './index.sass';

let root;
function init() {
	let App = require('./views/App').default;
	root = render(<App />, doc.getElementById('root'), root);
	emit('snackbar', 'App is ready for offline usage');
}

init();

if (process.env.NODE_ENV === 'production') {

	// Cancel the install prompt by preventing the default
	window.addEventListener('beforeinstallprompt', function(e) {
	  e.preventDefault();
	  return false;
	});

	// Register ServiceWorker via OfflinePlugin
	const runtime = require('offline-plugin/runtime');
	runtime.install({
	  onInstalled: () => {
			emit('snackbar', 'App is ready for offline usage');
	  },
	  onUpdating: () => {
	  },
	  onUpdateReady: () => {
	    runtime.applyUpdate();
	  },
	  onUpdated: () => {
			console.log('New content available, reload the page');
			emit('snackbar', 'New content available, reload the page');
	  },
	  onUpdateFailed: () => {
			emit('snackbar', 'An error happened while updating!');
	  }
	});

} else {

	// Use preact's devtools
	require('preact/devtools');

	// Listen for HMR
	if (module.hot) {
		module.hot.accept('./views/App', init);
	}
}
