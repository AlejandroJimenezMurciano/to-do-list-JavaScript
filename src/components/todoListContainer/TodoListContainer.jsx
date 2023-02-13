import { useState } from 'react';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';
import Task from '../task/Task';

const TodoListContainer = () => {
	const [allTasks, setAllTasks] = useState([]);
	return (
		<>
			<Form allTasks={allTasks} setAllTasks={setAllTasks} />
			<TodoList allTasks={allTasks} />
			<Task allTasks={allTasks} />
		</>
	);
};

export default TodoListContainer;
