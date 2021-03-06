import dummy from "../db/data.json";

export default function DayFull() {
	return (
		<>
			<table>
				<tbody>
					{dummy.words.map(word => (
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