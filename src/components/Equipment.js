import React from 'react';
import { useEffect, useState } from 'react';

function Equipment({ id }) {
	const [equipments, setEquipments] = useState('');

	const url = `https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${process.env.REACT_APP_SPOON_KEY}`;

	useEffect(() => {
		fetchData();
	}, []);
	// useEffect(() => {
	// 	setEquipments(equipments);
	// }, []);

	// fetch data is an array, not sure how to grab details

	const fetchData = () => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setEquipments(res);
			});
	};

	return (
		<section className='equipment'>
			<h2 className='equipment-title'>Equipment data</h2>
			<div className='equipment-list'>
				{/* {equipments.map((equipment, index) => (
					<div key={index}>
						<ul key={equipment.name}>{equipment.name}</ul>
					</div>
				))} */}
			</div>
		</section>
	);
}

export default Equipment;
