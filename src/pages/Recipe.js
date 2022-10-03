import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

function Recipe(props) {
	const [recipe, setRecipe] = useState(null);
	let params = useParams();

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setRecipe(data);
			})
			.catch(console.error);
	}, [params.name]);

	//render when recipe is null
	if (!recipe) {
		return <p>Loading recipe information ...</p>;
	}

	//render normal return
	return (
		<div className='details-container'>
			<img src={recipe.image} alt={recipe.title} />
			<div className='details'>{recipe.title}</div>
		</div>
	);
}

export default Recipe;
