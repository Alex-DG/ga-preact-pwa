import 'regenerator-runtime/runtime';
import chai from 'chai';
import assertJsx, { options } from 'preact-jsx-chai';
import { shallow, config } from 'preact-render-spy'
import { h, render } from 'preact';
import { route } from 'preact-router';

// when checking VDOM assertions, don't compare functions, just nodes and attributes:
options.functions = false;

// activate the JSX assertion extension:
chai.use(assertJsx);

global.sleep = ms => new Promise( resolve => setTimeout(resolve, ms) );
global.shallow = shallow;
global.h = h;
global.render = render;
global.route = route;

// This property is used by the spy renderer to pass information to the spies about where
// they are in the vdom tree, it is generally removed from the properties passed down to your
// component, but it might show up in some cases, and we want you to be able to pick it.
config.SPY_PRIVATE_KEY = 'SPY_PRIVATE_KEY';

// These options are passed to preact-render-to-string/jsx whenever you snapshot a VNode or
// FindWrapper (and on the FindWrapper's toString method)
config.toStringOptions = { shallow: true, skipFalseAttributes: false };

// This option allows you to use a custom DOM implementation instead of relying on a global
// document.createDocumentFragment()
config.createFragment = () => document.createDocumentFragment();
