import UserView from "./UserView";

export default function UserList() {
	return (
		<>
			<ul className="UserList">
				<UserView />
				<UserView />
				<UserView />
			</ul>
		</>
	);
}