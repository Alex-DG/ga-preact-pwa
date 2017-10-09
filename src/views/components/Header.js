import { h } from 'preact';
import { Link } from 'preact-router';

const Header = () => {
	return (
		<header className="header">
			<h1>Preact PWA</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/credit">Credit</Link>
			</nav>
		</header>
	);
};

export default Header;
