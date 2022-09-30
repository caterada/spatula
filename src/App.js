import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className='App'>
			<div id='header'>
				<Header />
			</div>
			<div id='form'>
				<Form />
			</div>
			<div id='results'>
				<Results />
			</div>
			<div id='sidebar'>
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
