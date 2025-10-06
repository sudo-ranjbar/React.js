import React, { useState } from 'react'

function TodoList() {

	const [tasks, setTasks] = useState(["Take a shower", "Eat breakfast"])
	const [newTask, setNewTask] = useState("")

	function handleInputChange(event) {
		setNewTask(event.target.value)
	}

	function addTask() {

		if (newTask.trim() !== "") {
			setTasks(prevState => [...prevState, newTask])
			setNewTask("")
		}
	}

	function deleteTask(index) {
		const tasksAfterRemovingTheSpecifiedElementWithGivenIndex = tasks.filter((_, i) => i !== index)
		setTasks(tasksAfterRemovingTheSpecifiedElementWithGivenIndex)
	}

	function moveTaskUp(index) {

		if (index > 0) {
			const updatedTasks = [...tasks]; // this semicolon is super necessary as the next line face error without it!
			[updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
			setTasks(updatedTasks)
		}
	}

	function moveTaskDown(index) {

		if (index < tasks.length-1) {
			const updatedTasks = [...tasks]; // this semicolon is super necessary as the next line face error without it!
			[updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
			setTasks(updatedTasks)
		}
	}



	return (
		<>
			<div className='todo-list'>

				<h1>Todo List</h1>

				<div>
					<input
						type="text"
						placeholder='enter a task...'
						value={newTask}
						onChange={handleInputChange}
					/>
					<button
						className='add-task-btn'
						onClick={addTask}
					>
						Add
					</button>
				</div>

				<ol>
					{tasks.map((task, index) => (
						<li key={index}>
							<span className='text'>{task}</span>
							<button
								className='delete-btn'
								onClick={() => deleteTask(index)}
							>
								Delete
							</button>
							<button
								className='moveUp-btn'
								onClick={() => moveTaskUp(index)}
							>
								Up
							</button>
							<button
								className='moveDown-btn'
								onClick={() => moveTaskDown(index)}
							>
								Dwon
							</button>
						</li>
					))}
				</ol>
			</div>
		</>
	)
}

export default TodoList