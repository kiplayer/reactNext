import { useState } from "react";
import Print from "./Print";

export default function Props(props) {
	const [name, setName] = useState('Mike');
	const [age, setAge] = useState(props.age);
	const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

	function clickChange(){
		const newName = name === "Mike" ? "Jane" : "Mike";
		setName(newName);
		setAge(age + 1);
	}

	return (
		<>
			<h3 id="name">{name}({age})</h3>
			<p>{msg}</p>
			<Print name={name} />
			<button onClick={clickChange}>Change</button>
		</>
	);
}