import propTypes from "prop-types";
function UserGreeting({ isloggedin = false, username = "Guest" }) {
	const welcomemsg = <h1 className="welcome-msg">Welcome back, {username}</h1>;
	const loginprompt = (
		<h1 className="login-prompt">Please Log in to Continue</h1>
	);

	return isloggedin ? welcomemsg : loginprompt;
}

UserGreeting.propTypes = {
	isloggedin: propTypes.bool,
	username: propTypes.string,
};
export default UserGreeting;
