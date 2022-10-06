import { NavLink } from 'react-router-dom';
import StickyBox from 'react-sticky-box';

//use Routes to display different category results

function Sidebar(props) {
	return (
		<div className='sidebar'>
			<h1 className='sidebar-title'>browse by</h1>
			<div className='category-links'>
				<NavLink id='category' to={'category/breakfast'}>
					<p className='hover-animation'>breakfast</p>
				</NavLink>
				<NavLink id='category' to={'category/appetizer'}>
					<p className='hover-animation'>appetizer</p>
				</NavLink>
				<NavLink id='category' to={'category/maincourse'}>
					<p className='hover-animation'>main course</p>
				</NavLink>
				<NavLink id='category' to={'category/soup'}>
					<p className='hover-animation'>soup</p>
				</NavLink>
				<NavLink id='category' to={'category/salad'}>
					<p className='hover-animation'>salad</p>
				</NavLink>
				<NavLink id='category' to={'category/beverage'}>
					<p className='hover-animation'>beverage</p>
				</NavLink>
				<NavLink id='category' to={'category/snack'}>
					<p className='hover-animation'>snack</p>
				</NavLink>
				<NavLink id='category' to={'category/dessert'}>
					<p className='hover-animation'>dessert</p>
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar;
