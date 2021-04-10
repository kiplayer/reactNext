import { useEffect, useState } from 'react';
import useFetch from '../src/hooks/useFetch';

export default function Class_hooks() {
	const days = useFetch('/days.json');
	const words = useFetch('/words.json');

	return (
		<>
			<h2>Custom Hooks</h2>
			<ul className={"tabBar"}>
				{days.map(day => (
					<li key={day.id}>
						<a href={'/day/'+day.day}>Day {day.day}</a>
					</li>
				))}
			</ul>
			<table>
				<tbody>
					{words.map(word => (
						<tr key={word.id}>
							<td>{word.eng}</td>
							<td>{word.kor}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}