import './Header.css';

function Header({ lastSearch }) {
	return (
		<div>
			<header>
				<div id='title'>spatula</div>
				<div className='results'>Showing results for {lastSearch}</div>
			</header>
		</div>
	);
}

export default Header;
