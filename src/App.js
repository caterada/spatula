import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import { useEffect, useState } from 'react';

function App() {
	return (
		<div className='App'>
			<Header />
			<Form />
			<Results />
		</div>
	);
}

export default App;
