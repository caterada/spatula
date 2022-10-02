import './Form.css';

function Form({ handleSubmit, handleChange, searchString }) {
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
