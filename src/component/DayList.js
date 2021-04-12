/* Dummy 사용 */
import dummy from "../db/data.json";

export default function DayList(props) {
	const selectDay = props.day;

	console.log(props);
	console.log(dummy.days);

	return (
		<>
			<ul className={"tabBar"}>
				{dummy.days.map(day => (
					<li key={day.id} className={day.day == selectDay ? "active":""}>
						<a href={'./day/'+day.day}>Day {day.day}</a>
					</li>
				))}
			</ul>
		</>
	);
}

/* Custom Hooks
import { useEffect, useState } from 'react';
import useFetch from '../../src/hooks/useFetch';

export default function DayList(props) {
	const selectDay = props.day;
	const days = useFetch('http://kimkeun.com:4000/days.json');

	return (
		<>
			<ul className={"tabBar"}>
				{days.map(day => (
					<li key={day.id} className={day.day == selectDay ? "active":""}>
						<a href={'/day/'+day.day}>Day {day.day}</a>
					</li>
				))}
			</ul>
		</>
	);
}
*/