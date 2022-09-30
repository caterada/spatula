import { useEffect, useState } from 'react';

function Results(props) {
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			})
			.catch(console.error);
	}, []);
	return <div>Results</div>;
}

export default Results;
