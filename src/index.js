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

	// => If app is used through the browser or not
	// if (window.matchMedia('(display-mode: standalone)').matches) {
	// 	console.log("Thank you for installing our app!");
	// }

	// => NEED TO LINK WEB APP TO A NATIVE APP THROUGH STORE
	// window.addEventListener("load", e => {
	//   if (navigator.getInstalledRelatedApps) {
	// 		console.log('getInstalledRelatedApps:');
	//     navigator.getInstalledRelatedApps()
	//     .then(apps => {
	// 			console.log('callback:');
	//       if(apps.length > 0) { /* Hide the UI */ }
	// 			console.log(apps);
	//     });
	//   }
	// });

	// => BEFORE PROMPT : INSTALL BANNER
	// window.addEventListener('beforeinstallprompt', function(e) {
	//   console.log('[beforeinstallprompt] Event fired');
	//
	//   // e.userChoice will return a Promise.
	//   // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
	//   e.userChoice.then(function(choiceResult) {
	//
	//     console.log(choiceResult.outcome);
	//
	//     if(choiceResult.outcome == 'dismissed') {
	//       console.log('User cancelled home screen install');
	// 			localStorage['isAdded'] = JSON.stringify(false); // APP NOT INSTALL
	//     }
	//     else {
	// 			localStorage['isAdded'] = JSON.stringify(true);
	//       console.log('User added to home screen'); // APP INSTALL
	//     }
	//   });
	// });

} else {

	// use preact's devtools
	require('preact/devtools');

	// listen for HMR
	if (module.hot) {
		module.hot.accept('./views', init);
	}
}
