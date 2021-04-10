import { useState } from "react";

export default function State() {
	//let name = "Mike";
	const [name, setName] = useState('Mike');

	function changeName(){
		//name = name === "Mike" ? "Jane" : "Mike";
		//document.getElementById("name").innerText = name;
		const newName = name === "Mike" ? "Jane" : "Mike";
		setName(newName);
	}

	return (
		<>
			<h3 id="name">{name}</h3>
			<button onClick={changeName}>Change</button>
		</>
	);
}