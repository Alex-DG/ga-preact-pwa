import Home from '../../src/views/pages/Home';
import { expect } from 'chai';

describe('pages/Home', () => {

	it('should show the correct navigation links', () => {
		const home = <Home/>;
		expect(home).to.contain(<h1>Home</h1>);
	});

	it('should contains className page', () => {
		let wrapper = shallow(<Home/>);
		 expect(wrapper.find('.page').length).to.be.equal(1);
	});

	it('should contains className page__home', () => {
		let wrapper = shallow(<Home/>);
		 expect(wrapper.find('.page__home').length).to.be.equal(1);
	});

	it('should contains className page__home', () => {
		let wrapper = shallow(<Home/>);
		 expect(wrapper.find('.page__home').length).to.be.equal(1);
	});
});
