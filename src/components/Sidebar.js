import './Sidebar.css';

//use Routes to display different category results

function Sidebar(props) {
	return (
		<div className='sidebar'>
			<h1>browse by</h1>
			<p>breakfast</p>
			<p>appetizer</p>
			<p>pasta</p>
			<p>soup</p>
			<p>salad</p>
			<p>pastry</p>
			<p>vegetarian</p>
			<p>gluten-free</p>
			<p>dessert</p>
			<p></p>
		</div>
	);
}

export default Sidebar;
