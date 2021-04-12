export default function Class_event() {
	function showName(){
		console.log("Mike");
	}
	function showAge(age){
		console.log(age);
	}
	function showText(e){
		console.log(e.target.value);
	}
	function showTextByString(str){
		console.log(str);
	}

	return (
		<>
			<h2>Event</h2>
			<div style={{
				lineHeight:"40px"
			}}>
				<button onClick={showName}>Show name (Function)</button><br />
				<button onClick={() => {
					showName();
				}}>Show Name (Inline)</button><br />

				<button onClick={showAge}>Show age (Function)</button><br />
				<button onClick={() => {
					showAge(10);
				}}>Show age (Inline)</button><br />

				Change text (function) : <input type="text" onChange={showText} /><br />
				Change text (Inline) : <input type="text" onChange={(e) => {
					console.log(e.target.value);
				}} /><br />
				Change text (Inline Parameter Pass) : <input type="text" onChange={(e) => {
					const str = e.target.value;
					showTextByString(str);
				}} />
			</div>
		</>
	);
}