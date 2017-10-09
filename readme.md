# ga-preact-pwa

> Webpack3 boilerplate for building SPA / PWA / offline front-end apps with :atom_symbol: [Preact](https://github.com/developit/preact)

> Based and thanks to the work of [lukeed/preact-starter](https://github.com/lukeed/preact-starter)

> My goal is to experiment PWA with Preact (command/libs may change as I'm keen to test different alternatives-best practices)

[Demo](https://ga-pwa.firebaseapp.com/)

## Features

* Offline Caching (via `serviceWorker` and `offline-plugin`)
* SASS & Autoprefixer
* Asset Versioning (aka "cache-busting")
* ES2015 (ES6) and ES2016 (ES7) support
* Hot Module Replacement (HMR) for all files
* Preact's [Developer Tools](#preact-developer-tools)
* Firebase headers configuration
* Testing : Jest, Chai
* [MUI lightweight CSS framework](https://www.muicss.com/) with [preact-mui](https://www.npmjs.com/package/preact-mui)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) certified

## Development

### Commands

#### build

```
$ yarn build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```
$ yarn start
```

Runs your application (from the `dist` directory) in the browser.

#### watch

```
$ yarn watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.

#### test

```
$ yarn test
```

Start tests through the project with `Jest`

#### deploy

```
$ yarn deploy
```

If you are using Firebase hosting, this command create a new `dist` directory and deploy on Firebase.

### Preact Developer Tools

You can inspect and modify the state of your Preact UI components at runtime using the [React Developer Tools](https://github.com/facebook/react-devtools) browser extension.

1. Install the [React Developer Tools](https://github.com/facebook/react-devtools) extension
2. [Import the `preact/devtools`](src/index.js#L23) module in your app
3. Reload and go to the 'React' tab in the browser's development tools

## License

MIT
