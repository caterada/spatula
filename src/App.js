import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import RecipeDetails from './components/RecipeDetails';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.title = 'spatula';
	});
	return (
		<div className='App'>
			<header id='header'>
				<Header />
			</header>
			<div id='form'>
				<Form />
			</div>
			<main id='results'>
				<Routes>
					<Route path='/' element={<Results />} />
					<Route path='recipe/:id' element={<RecipeDetails />} />
				</Routes>
			</main>
			<div id='sidebar'>
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
