import InstallOverlay from '../../src/views/components/InstallOverlay';
import { expect } from 'chai';

describe('pages/Home', () => {

  it('should render overlay', () => {
    const wrapper = shallow(<InstallOverlay os={'Android'}/>);
    wrapper.setState({
      visible: true,
    });

    expect(wrapper.find('#install-overlay').length).to.be.equal(1);
  });

  it('should not render overlay', () => {
    const wrapper = shallow(<InstallOverlay os={'Android'}/>);
    wrapper.setState({
      visible: false,
    });

    expect(wrapper.find('#install-overlay').length).to.be.equal(0);
  });

	it('click on close btn', () => {
		const wrapper = shallow(<InstallOverlay/>);
    wrapper.setState({
      visible: true,
    });
    wrapper.find('Button').simulate('click')

		expect(wrapper.state('visible')).to.be.false;
	});

	it('shoudl render pref checkbox', () => {
    const wrapper = shallow(<InstallOverlay/>);
    wrapper.setState({
      visible: true,
    });

    expect(wrapper.find('Checkbox').length).to.be.equal(1);
  });

});
