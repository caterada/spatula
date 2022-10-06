import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Results({ searchString, setSearchString }) {
	//change input value
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	let params = useParams();

	//title comes from Routes, route to the correct url
	useEffect(() => {
		getResults(params.title);
	}, [params.title]);

	const getResults = () => {
		// build URL from user input value
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&query=${searchString}&number=12`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setResults(res.results);
				setError(null);
				setSearchString('');
			})
			.catch((err) => {
				console.log(error);
				setError(err.message);
			});
	};

	if (!results.length) {
		return <h2>No Images Found!</h2>;
	}

	return (
		<div>
			<section className='container'>
				{results.map((result) => (
					<div className='card' key={result.title}>
						<div className='card-image'>
							<Link to={`/recipe/${result.id}`} key={result.id}>
								<img src={result.image} alt={result.title} />
							</Link>
						</div>
						<h3>
							<div className='card-title'> {result.title}</div>
						</h3>
					</div>
				))}
			</section>
			{error && <div> {error}</div>}
		</div>
	);
}

export default Results;
