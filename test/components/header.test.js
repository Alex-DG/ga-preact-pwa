import Header from '../../src/views/components/Header';
import { expect } from 'chai';

describe('components/Header', () => {

	it('should show the correct navigation links', () => {
		const header = <Header/>;
		expect(header).to.contain(<a href='/'>Home</a>);
		expect(header).to.contain(<a href='/blog'>Blog</a>);
		expect(header).to.contain(<a href='/credit'>Credit</a>);
	});
});
