import './Results.css';
import { Link } from 'react-router-dom';

const Results = ({ results }) => {
	if (!results.length) {
		return <h2>No Images Found!</h2>;
	}

	return (
		<div>
			{console.log(results)}
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
		</div>
	);
};

export default Results;
