import LineArrowSvg from '../../src/views/components/LineArrowSvg';
import { expect } from 'chai';

describe('pages/Home', () => {
  const wrapper = shallow(<LineArrowSvg />);

  it('should contain svg', () => {
    expect(wrapper.find('svg').length).to.be.equal(1);
  });

  it('should contain defs', () => {
    expect(wrapper.find('defs').length).to.be.equal(1);
  });

  it('should contain marker', () => {
    expect(wrapper.find('marker').length).to.be.equal(1);
  });

  it('should contain marker id head', () => {
    expect(wrapper.find('#head').length).to.be.equal(1);
  });

  it('should contain path arrow', () => {
    expect(wrapper.find('#arrow-line').length).to.be.equal(1);
  });

  it('should contain paths', () => {
    expect(wrapper.find('path').length).to.be.equal(2);
  });

});
