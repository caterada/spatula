import React from 'react';
import { useEffect, useState } from 'react';

function Equipment({ id }) {
	const [equipments, setEquipments] = useState('');

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${process.env.REACT_APP_SPOON_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setEquipments(res.equipment);
			})
			.catch(console.error);
	}, []);

	return (
		<section className='equipment'>
			<h2 className='equipment-title'>Equipment data</h2>
			<div className='equipment-list'>
				{equipments.map((equipment, index) => (
					<div key={index}>
						<ul key={equipment.name}>{equipment.name}</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default Equipment;
