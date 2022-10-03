function NutritionFacts({ id }) {
	//render normal return
	return (
		<div className='nutrition-facts'>
			<img
				src={`https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?apiKey=${process.env.REACT_APP_SPOON_KEY}`}
				alt='nutrition facts'
			/>
		</div>
	);
}

export default NutritionFacts;
