import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
		// console.log(data);
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
		</div>
	);
}

export default Recipe;
