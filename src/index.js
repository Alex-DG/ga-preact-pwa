import { render } from 'preact';
import { doc, emit } from './views/shared';
import './index.sass';

let elem, App;
function init() {
	App = require('./views').default; // views/index.js
	elem = render(App, doc.getElementById('root'), elem);
}

init();

if (process.env.NODE_ENV === 'production') {

	// Cancel the install prompt by preventing the default
	window.addEventListener('beforeinstallprompt', function(e) {
	  e.preventDefault();
	  return false;
	});

	// Register SW
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
			emit('snackbar', 'An eror happened while updating!');
	  }
	});

} else {

	// use preact's devtools
	require('preact/devtools');

	// listen for HMR
	if (module.hot) {
		module.hot.accept('./views', init);
	}
}
