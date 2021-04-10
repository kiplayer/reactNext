import { useEffect, useState } from 'react';

export default function Class_effect() {
	const [count, setCount] = useState(0);
	const [day, setDay] = useState(0);

	function changeCount(){
		setCount(count + 1);
	}

	function changeDay(){
		setDay(day + 1);
	}

	useEffect(() => {
		console.log("First Loading");
	}, []);

	useEffect(() => {
		console.log("Count change ("+count+")");
	}, [count]);

	return (
		<>
			<h2>useEffect</h2>
			<button onClick={changeCount}>{count}</button> &nbsp;
			<button onClick={changeDay}>Day {day}</button>
		</>
	);
}