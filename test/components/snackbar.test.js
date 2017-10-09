import Snackbar from '../../src/views/components/Snackbar';
import { emit } from '../../src/views/shared';

import { expect } from 'chai';

describe('components/Snackbar', () => {

	it('should return Reload btn', () => {
    const wrapper = shallow(<Snackbar />);
    wrapper.setState({
      open: true,
      message: 'New content available, reload the page'

    });
    expect(wrapper.find('Button').contains('Reload')).to.be.true;
    expect(wrapper.find('Button').contains('Close')).to.be.false;
	});

	it('should return Close btn', () => {
    const wrapper = shallow(<Snackbar />);
    wrapper.setState({
      open: true,
      message: 'An error happened while updating!'

    });
    expect(wrapper.find('Button').contains('Reload')).to.be.false;
    expect(wrapper.find('Button').contains('Close')).to.be.true;
	});

	it('should click Reload btn', () => {
    const wrapper = shallow(<Snackbar />);
    wrapper.setState({
      open: true,
      message: 'New content available, reload the page'
    });
    wrapper.find('Button').simulate('click');
    expect(wrapper.state('open')).to.be.false;
    expect(wrapper.state('message')).to.be.a('string', '');
	});

	it('should click Close btn', () => {
    const wrapper = shallow(<Snackbar />);
    wrapper.setState({
      open: true,
      message: 'An error happened while updating!'
    });
    wrapper.find('Button').simulate('click');

    expect(wrapper.state('open')).to.be.false;
    expect(wrapper.state('message')).to.be.a('string', '');
	});

	it('shoud trigger offline usage event', () => {
    const wrapper = shallow(<Snackbar />);
    const evt = 'snackbar';
    const text = 'App is ready for offline usage';

    expect(wrapper.state('open')).to.be.false;
    expect(wrapper.state('message')).to.be.a('string', '');

    emit(evt, text); // trigger event offline usage

    expect(wrapper.state('open')).to.be.true;
    expect(wrapper.state('message')).to.be.a('string', text);
	});

	it('shoud trigger new content available event', () => {
    const wrapper = shallow(<Snackbar />);
    const evt = 'snackbar';
    const text = 'New content available, reload the page';

    expect(wrapper.state('open')).to.be.false;
    expect(wrapper.state('message')).to.be.a('string', '');

    emit(evt, text); // trigger event offline usage

    expect(wrapper.state('open')).to.be.true;
    expect(wrapper.state('message')).to.be.a('string', text);
	});

});
