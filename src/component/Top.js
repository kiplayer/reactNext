import Gnb from "./Gnb";

export default function Top() {
	return (
		<div id="header">
			<div className="inner">
				<a href="/"><h1>Logo</h1></a>
				<Gnb />
			</div>
		</div>
	);
}