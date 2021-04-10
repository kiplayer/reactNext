import DayList from "../../src/component/DayList";
import DayView from "../../src/component/DayView";
import { useRouter } from "next/router";

export default function Day() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<h2>Day</h2>
			<DayList day={id} />
			<DayView day={id} />
		</>
	);
}