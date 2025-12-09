function List() {
	const fruits = [
		{ name: "Apple", calories: 95 },
		{ name: "Banana", calories: 45 },
		{ name: "Cherry", calories: 105 },
		{ name: "Date", calories: 37 },
	];
	fruits.sort((a, b) => b.name.localeCompare(a.name));
	const lowCalFruit = fruits.filter((fruit) => fruit.calories < 50);

	const listitems = fruits.map((fruit) => (
		<li key={fruit.name}>
			{fruit.name}:&nbsp;
			<b>{fruit.calories}</b>
		</li>
	));

	const listitems2 = lowCalFruit.map((lowCalFruit) => (
		<li key={lowCalFruit.name}>
			{lowCalFruit.name}:&nbsp;
			<b>{lowCalFruit.calories}</b>
		</li>
	));

	return (
		<div>
			<ul>{listitems}</ul>
			<p>Low Cal Fruits:</p>
			<ul>{listitems2}</ul>
		</div>
	);
}
export default List;
