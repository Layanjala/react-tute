import { useState } from "react";

function OnChange() {
	const [name, setName] = useState("laya");
	const [Quantity, setQuantity] = useState(1);
	const [comment, setComment] = useState("");
	const [payment, setPayment] = useState("credit card");
	const [shipping, setshipping] = useState("standard");

	function handleChange(event) {
		setName(event.target.value);
	}
	function handleQuantityChange(event) {
		setQuantity(event.target.value);
	}
	function handleCommentChange(event) {
		setComment(event.target.value);
	}
	function handlePaymentChange(event) {
		setPayment(event.target.value);
	}
	function handleShippingChange(event) {
		setshipping(event.target.value);
	}

	return (
		<div>
			<input value={name} onChange={handleChange} />
			<p>Name : {name}</p>
			<input value={Quantity} onChange={handleQuantityChange} type="number" />
			<p>Quantity : {Quantity}</p>
			<textarea
				value={comment}
				onChange={handleCommentChange}
				placeholder="Enter Delivery Instructions"
			/>
			<p>Comment : {comment}</p>
			<select value={payment} onChange={handlePaymentChange}>
				<option value="credit card">Credit Card</option>
				<option value="paypal">PayPal</option>
				<option value="bitcoin">Bitcoin</option>
			</select>
			<p>Payment : {payment}</p>
			<label>
				<input
					type="radio"
					value="standard"
					checked={shipping === "standard"}
					onChange={handleShippingChange}
				/>
				Standard
			</label>
			<label>
				<input
					type="radio"
					value="express"
					checked={shipping === "express"}
					onChange={handleShippingChange}
				/>
				Express
			</label>
			<p>Shipping : {shipping}</p>
		</div>
	);
}

export default OnChange;
