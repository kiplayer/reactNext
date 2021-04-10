export default function Class_jsx() {
	const name = 'Kim Keun';
	const data = {
		name : '네이버',
		url : 'https://www.naver.com',
	};
	return (
		<>
			<h2>JSX</h2>
			<div>
				<p>Name = {name}</p>
				<p>2 + 3 = {2+3}</p>
				<p><a target='_blank' href={data.url}>{data.name}로 이동하기</a></p>
			</div>
		</>
	);
}