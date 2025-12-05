import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0 }) {
	return (
		<div className="student">
			<p>Name: {name}</p>
			<p>Age: {age}</p>
		</div>
	);
}

Student.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

export default Student;
