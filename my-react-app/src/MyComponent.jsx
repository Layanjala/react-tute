import React, { useState } from "react";
function MyComponent() {
	const [name, setName] = useState("laya");
	const updateName = () => {
		setName("spongebob");
	};
	return (
		<div>
			<h2>My name : {name}</h2>
			<button onClick={(updateName) => setName}>updateName</button>
		</div>
	);
}
export default MyComponent;
