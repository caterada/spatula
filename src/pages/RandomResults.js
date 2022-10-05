import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function RandomResults() {
	//save results into useState
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;

		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error('could not fetch data');
				}
				return res.json();
			})
			.then((data) => {
				// console.log(data);
				setRecipes(data.recipes);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<div>
			<section className='container'>
				{recipes.map((recipe) => {
					return (
						<div className='card' key={recipe.title}>
							<div className='card-image'>
								<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
									<img src={recipe.image} alt={recipe.title} />
								</Link>
							</div>
							<h3>
								<div className='card-title'> {recipe.title}</div>
							</h3>
						</div>
					);
				})}
				{error && <div> {error}</div>}
			</section>
		</div>
	);
}

export default RandomResults;
