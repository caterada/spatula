import './Results.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Results(props) {
	//save results into useState
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setRecipes(data.recipes);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			{recipes.map((recipe) => {
				return (
					<Link to={`recipe/${recipe.id}`} key={recipe.id}>
						<div className='card' key={recipe.title}>
							<div className='card-image'>
								<img src={recipe.image} alt={recipe.title} />
								<h3>{recipe.title}</h3>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Results;
