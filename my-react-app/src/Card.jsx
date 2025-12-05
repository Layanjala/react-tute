// prettier-ignore
import cardImg from "./assets/card.png";

function Card() {
	return (
		<div className="card">
			<img
				className="cardimage"
				alt="Card image"
				src={cardImg}
				style={{ width: "200px", height: "150px", objectFit: "cover" }}
			></img>
			<h2 className="cardtitle">Card Title</h2>
			<p>This is a simple card component.</p>
		</div>
	);
}
export default Card;
