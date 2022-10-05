import { NavLink } from 'react-router-dom';

//use Routes to display different category results

function Sidebar(props) {
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>browse by</h1>
			<div className='category-links'>
				<NavLink to={'category/breakfast'}>
					<p className='breakfast'>breakfast</p>
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
				<NavLink to={'category/salad'}>
					<p>salad</p>
				</NavLink>
				<NavLink to={'category/beverage'}>
					<p>beverage</p>
				</NavLink>
				<NavLink to={'category/snack'}>
					<p>snack</p>
				</NavLink>
				<NavLink to={'category/dessert'}>
					<p>dessert</p>
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
