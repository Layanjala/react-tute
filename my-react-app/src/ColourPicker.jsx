import React, { useState } from "react";

function ColourPicker() {
	const [color, setcolor] = useState("red");
	function handleColorChange(event) {
		setcolor(event.target.value);
	}
	return (
		<div className="colour-picker">
			<h2>Colour Picker Component</h2>
			<div className="color-display" style={{ backgroundColor: color }}>
				<p>select a color: {color}</p>
			</div>
			<label> Select a color:</label>
			<input type="color" value={color} onChange={handleColorChange} />
		</div>
	);
}
export default ColourPicker;
