import Hello from '../src/component/Hello';
import Welcome from '../src/component/Welcome';

/*const Class_component = function(){
	return (
		<>
			<h2>Component</h2>
			<h3>정의명령어 : const Class_component = function()</h3>
			<Welcome />
			<Hello />
			<Hello />
			<Hello />
		</>
	);
}
export default Class_component;

const Class_component = () => {
	return (
		<>
			<h2>Component</h2>
			<h3>정의명령어 : const Class_component = () =></h3>
			<Welcome />
			<Hello />
			<Hello />
			<Hello />
		</>
	);
}
export default Class_component;*/

export default function Class_component() {
	return (
		<>
			<h2>Component</h2>
			<h3>정의명령어 : export default function Class_component()</h3>
			<Welcome />
			<Hello />
			<Hello />
			<Hello />
		</>
	);
}