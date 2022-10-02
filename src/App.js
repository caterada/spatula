import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	//results component state
	const [results, setResults] = useState([]);
	//search input state
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		getResults(searchString);
	}, []);

	// useEffect(() => {
	// 	const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;

	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setRecipes(data.recipes);
	// 		})
	// 		.catch(console.error);
	// }, []);

	function getResults(searchString) {
		// build URL from user input value

		// let url = '';

		// if (searchString !== '') {
		// 	url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&query=${searchString}&number=12`;
		// } else {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=12`;
		// }

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setResults(res.results);
				setSearchString('');
			})
			.catch(console.error);
	}

	//user input value
	function handleChange(e) {
		setSearchString(e.target.value);
	}

	//when button is clicked, run get images
	function handleSubmit(e) {
		e.preventDefault();
		// //navigate to correct url
		// navigate(`/searched/${searchString}`);
		getResults(searchString);
	}

	//change the title page name
	useEffect(() => {
		document.title = 'spatula';
	});

	return (
		<div className='App'>
			<header id='header'>
				<Header />
			</header>
			<div id='form'>
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
				/>
			</div>
			<main id='results'>
				<Results results={results} />
			</main>
			<div id='sidebar'>
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
