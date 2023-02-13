const Task = ({ task, AllTasks, setAllTasks }) => {
	return (
		<div>
			<input
				id={task.id}
				type='checkbox'
				checked={task.checked}
				onChange={e => changeCompleted(task.id, AllTasks, setAllTasks)}
			/>
			<label htmlFor={task.id}>{task.task}</label>
			<span>X</span>
		</div>
	);
};

const changeCompleted = (id, AllTasks, setAllTasks) => {
	const updatedTasks = AllTasks.map(task => {
		if (task.id === id) {
			task.checked = !task.checked;
		}
		return task;
	});
	setAllTasks(updatedTasks);
};

export default Task;
