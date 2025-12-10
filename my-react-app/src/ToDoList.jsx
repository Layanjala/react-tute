import React, { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState([
		"eat breakfast",
		"take shower",
		"go to school",
	]);
	const [newTasks, setNewTasks] = useState("");

	function handleInputChange(event) {
		setNewTasks(event.target.value);
		//
	}
	function addTask() {
		if (newTasks.trim() !== "") {
			setTasks((t) => [...t, newTasks]);
			setNewTasks("");
		}
	}
	function removeTask(index) {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	}
	function moveTaskUp(index) {
		if (index > 0) {
			// Can't move the first task up
			const updatedTasks = [...tasks];
			const temp = updatedTasks[index - 1];
			updatedTasks[index - 1] = updatedTasks[index];
			updatedTasks[index] = temp;
			setTasks(updatedTasks);
		}
	}
	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			// Can't move the last task down
			const updatedTasks = [...tasks];
			const temp = updatedTasks[index + 1];
			updatedTasks[index + 1] = updatedTasks[index];
			updatedTasks[index] = temp;
			setTasks(updatedTasks);
		}
	}

	return (
		<div className="todolist">
			<h2>To-Do List</h2>
			<div>
				<input
					type="text"
					placeholder="Add a new task"
					value={newTasks}
					onChange={handleInputChange}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>
			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						<span className="text">{task}</span>
						<button className="deletebutton" onClick={() => removeTask(index)}>
							Delete
						</button>
						<button className="upbutton" onClick={() => moveTaskUp(index)}>
							Up
						</button>
						<button className="downbutton" onClick={() => moveTaskDown(index)}>
							Down
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}
export default ToDoList;
