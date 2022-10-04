// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// function SidebarResults(props) {
// 	const [category, setCategory] = useState([]);
// 	let params = useParams();

// 	useEffect(() => {
// 		getCategory(params);
// 		console.log(params);
// 	}, [params]);

// 	function getCategory(type) {
// 		// build URL from user input value
// 		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&type=${params}&number=12`;

// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((res) => {
// 				setCategory(res.results);
// 			})
// 			.catch(console.error);
// 	}

// 	if (!category.length) {
// 		return <h2>No Images Found!</h2>;
// 	}

// 	return (
// 		<div>
// 			<section className='container'>
// 				{category.map((result) => (
// 					<div className='card' key={result.title}>
// 						<div className='card-image'>
// 							<Link to={`/recipe/${result.id}`} key={result.id}>
// 								<img src={result.image} alt={result.title} />
// 							</Link>
// 						</div>
// 						<h3>
// 							<div className='card-title'> {result.title}</div>
// 						</h3>
// 					</div>
// 				))}
// 			</section>
// 		</div>
// 	);
// }

// export default SidebarResults;
