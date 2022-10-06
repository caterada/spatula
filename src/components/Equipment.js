import React from 'react';
import { useEffect, useState } from 'react';

function Equipment({ id }) {
	const [equipments, setEquipments] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${process.env.REACT_APP_SPOON_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data.equipment);
				setEquipments(data.equipment);
			})
			.catch(console.error);
	}, [id]);

	return (
		<section className='equipment'>
			<h2 className='equipment-title'>Equipment data</h2>
			<div className='equipment-list'>
				{equipments.map((equipment, index) => (
					<ul key={index}>
						<li key={equipment.name}>{equipment.name}</li>
					</ul>
				))}
			</div>
		</section>
	);
}

export default Equipment;
