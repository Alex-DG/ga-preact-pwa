import App from '../src/views/App';
import { expect } from 'chai';

describe('views/App', () => {
	let scratch;

	beforeAll( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	afterAll( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	it('should render one component', () => {
		const context = shallow(<App/>);
		expect(context).to.have.length(1); // should render 1 component
	});

	it('should render homepage', () => {
		render(<App />, scratch);
		expect(scratch.innerHTML).to.contain('Home');
	});

	it('should render blog', async () => {
		render(<App />, scratch);
		route('/blog');

		await sleep(1);

		expect(scratch.innerHTML).to.contain('Blog');
	});

	it('should render article', async () => {
		render(<App />, scratch);
		expect(scratch.innerHTML).to.contain('Article');
	});

	it('should render credit', async () => {
		render(<App />, scratch);
		route('/credit');
		await sleep(1);

		expect(scratch.innerHTML).to.contain('Credit');
	});

});
