import { useEffect, useState } from 'react';

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
					<div key={recipe.id}>
						<img src={recipe.image} alt={recipe.title} />
					</div>
				);
			})}
		</div>
	);
}

export default Results;
