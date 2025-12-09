import cardImg from "./assets/card.png";

function ProfilePicture() {
	const handleClick = () => console.log("ouch!");
	return (
		<div className="card">
			<img
				src={cardImg}
				alt="Profile"
				className="cardimage"
				onClick={handleClick}
			/>
			<h2 className="cardtitle">User Name</h2>
		</div>
	);
}
export default ProfilePicture;
