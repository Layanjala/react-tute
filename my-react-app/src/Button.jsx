// prettier-ignore
function Button() {
	const handleClick = () => console.log("Button Clicked");
	return(
     <button className="button" onClick={handleClick}>Click Me</button>
	);
}
export default Button;
