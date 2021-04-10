/* Dummy 사용 */
import dummy from "../db/data.json";

export default function DayView(props) {
	const selectDay = props.day;
	const wordList = dummy.words.filter(word => word.day == selectDay);

	console.log(dummy.words);
	console.log(wordList);

	return (
		<>
			<table>
				<tbody>
					{wordList.map(word => (
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

/* Custom Hooks
import { useEffect, useState } from 'react';
import useFetch from '../../src/hooks/useFetch';

export default function DayList(props) {
	const selectDay = props.day;
	const wordList = useFetch("http://kimkeun.com:4000/words.json?day="+selectDay);

	return (
		<>
			<table>
				<tbody>
					{wordList.map(word => (
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
*/