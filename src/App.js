import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Recipe from './pages/Recipe';
import Results from './pages/Results';
import RandomResults from './pages/RandomResults';
import { useNavigate } from 'react-router-dom';

function App() {
	const [searchString, setSearchString] = useState('');
	useEffect(() => {
		document.title = 'spatula';
	});

	const navigate = useNavigate();

	//user input value
	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	//when button is clicked, run get images
	const handleSubmit = (e) => {
		e.preventDefault();
		// //navigate to correct url
		navigate(`/results/:${searchString}`);
	};

	return (
		<div className='App'>
			<header id='header'>
				<Header />
			</header>
			<div id='form'>
				<Form
					searchString={searchString}
					setSearchString={setSearchString}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</div>
			<main id='results'>
				<Routes>
					<Route path='/' element={<RandomResults />} />
					<Route
						path='/results/:title'
						element={
							<Results
								searchString={searchString}
								handleSubmit={handleSubmit}
							/>
						}
					/>
					<Route path='/recipe/:id' element={<Recipe />} />
				</Routes>
			</main>
			<div id='sidebar'>
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
