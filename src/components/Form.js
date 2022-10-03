import './Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ searchString, handleSubmit, handleChange }) {
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				name='searchString'
				type='text'
				placeholder='search recipe'
				value={searchString}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default Form;
