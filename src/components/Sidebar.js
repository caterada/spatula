import './Sidebar.css';
import { NavLink } from 'react-router-dom';

//use Routes to display different category results

function Sidebar(props) {
	return (
		<div className='sidebar'>
			<h1>browse by</h1>
			<NavLink to={'category/breakfast'}>
				<p>breakfast</p>
			</NavLink>
			<NavLink to={'category/appetizer'}>
				<p>appetizer</p>
			</NavLink>
			<NavLink to={'category/maincourse'}>
				<p>main course</p>
			</NavLink>
			<NavLink to={'category/soup'}>
				<p>soup</p>
			</NavLink>

			<p>salad</p>
			<p>vegetarian</p>
			<p>gluten-free</p>
			<p>dessert</p>
			<p></p>
		</div>
	);
}

export default Sidebar;
