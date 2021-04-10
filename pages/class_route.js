import DayList from "../src/component/DayList";
import DayView from "../src/component/DayView";

export default function Class_route() {
	return (
		<>
			<h2>Route</h2>
			<p>React + Next 에선 useRouter를 사용하여 URL에서 Param 정보를 가져올 수 있음.</p>
			<DayList />
			<DayView />
		</>
	);
}