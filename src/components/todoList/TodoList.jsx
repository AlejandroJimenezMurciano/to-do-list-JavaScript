import Task from '../task/Task';

const TodoList = ({ allTasks }) => {
	return allTasks.map(task => {
		return (
			<Task
				key={task.id}
				task={task}
				AllTasks={AllTasks}
				setAllTasks={setAllTasks}
			/>
		);
	});
};

export default TodoList;
