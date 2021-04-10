import { useEffect, useState } from 'react';

export default function Class_fetch() {
	const [days, setDays] = useState([]);
	const [words, setWords] = useState([]);

	useEffect(() => {
		fetch('/data.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setDays(data.days);
				setWords(data.words);
			});
	}, []);
	console.log(days);

	return (
		<>
			<h2>Fetch()</h2>
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