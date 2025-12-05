function UserGreeting(props) {
	if (props.isloggedin) {
		return <h1>Welcome back, {props.username}!</h1>;
	}
}
export default UserGreeting;
