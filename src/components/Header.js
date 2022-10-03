import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<header>
				<div>
					<Link to='/' style={{ textDecoration: 'none' }} id='title'>
						spatula
					</Link>
				</div>
			</header>
		</div>
	);
}

export default Header;
