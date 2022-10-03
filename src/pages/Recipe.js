import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NutritionFacts from '../components/NutritionFacts';
import data from '../Object.json';

function Recipe() {
	const [recipe, setRecipe] = useState(null);
	// let params = useParams();

	// useEffect(() => {
	// 	fetch(
	// 		`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setRecipe(data);
	// 		})
	// 		.catch(console.error);
	// }, [params.name]);

	useEffect(() => {
		setRecipe(data);
		console.log(data);
	});

	//render when recipe is null
	if (!recipe) {
		return <p>Loading recipe information ...</p>;
	}

	//render normal return
	return (
		<div className='details-container'>
			<div className='recipe-image'>
				<img src={data.image} alt={data.title} />
			</div>
			<h1 className='recipe-title'>{data.title}</h1>
			{/* map out recipe steps */}
			<h2>Instructions</h2>
			<section className='data-instructions'>
				{data.analyzedInstructions[0].steps.map((steps, index) => (
					<div key={index}>
						<span key={steps.number}>
							<ul className='step' key={steps.step}>
								{steps.number}
								{'.'} {steps.step}
							</ul>
						</span>
					</div>
				))}
			</section>
			{/* ingredients */}
			<section className='ingredients-list'>
				<h2>Ingredients</h2>
				{data.extendedIngredients.map((ingredient, index) => (
					// does this key have to be different than the one above?
					<div key={index}>
						<ul key={ingredient.name}>{ingredient.original}</ul>
					</div>
				))}
			</section>
			{/* nutrition facts image */}
			<NutritionFacts id={data.id} />
		</div>
	);
}

export default Recipe;
