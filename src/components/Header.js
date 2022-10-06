import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<header>
				<Link to='/' style={{ textDecoration: 'none' }} id='title'>
					spatula
				</Link>
			</header>
		</div>
	);
}

export default Header;
