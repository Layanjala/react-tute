import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UseerGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import OnChange from "./OnChange.jsx";
import ColourPicker from "./ColourPicker.jsx";
import UpdateArray from "./UpdateArray.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
	return (
		<div>
			<Header />
			<Food />
			<Card />
			<Button />
			<Student name="John Doe" age={15} />
			<Student name="Patric Harvy" age={42} />
			<Student />
			<UserGreeting isloggedin={true} username="Laya" />
			<List />
			<ProfilePicture />
			<MyComponent />
			<OnChange />
			<ColourPicker />
			<UpdateArray />
			<ToDoList />
			<Footer />
		</div>
	);
}

export default App;
