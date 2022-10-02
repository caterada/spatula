// import { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';

// function RandomResults(props) {
// 	//save results into useState
// 	const [recipes, setRecipes] = useState([]);

// 	useEffect(() => {
// 		const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;

// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				console.log(data);
// 				setRecipes(data.recipes);
// 			})
// 			.catch(console.error);
// 	}, []);

// 	return (
// 		<div>
// 			<section className='container'>
// 				{recipes.map((recipe) => {
// 					return (
// 						<div className='card' key={recipe.title}>
// 							<div className='card-image'>
// 								<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
// 									<img src={recipe.image} alt={recipe.title} />
// 								</Link>
// 							</div>
// 							<h3>
// 								<div className='card-title'> {recipe.title}</div>
// 							</h3>
// 						</div>
// 					);
// 				})}
// 			</section>
// 		</div>
// 	);
// }

// export default RandomResults;
