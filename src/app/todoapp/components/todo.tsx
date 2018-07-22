import * as React from 'react';
import {ITodo} from "../../index";
import TodoTextCont from '../containers/todo-text-cont';
import './todo.scss';

interface ITodoProps extends ITodo {
	markCompleted: (id: string, completed: boolean) => void;
}

const Todo: React.SFC<ITodoProps> = ({id, completed = false, text = '', markCompleted}) => {
	const fnMarkCompleted = () => {
		markCompleted(id, !completed);
	}

	return (
		<li className={`todo-item ${completed ? 'todo-completed' : 'todo-notcomplete'} list-unstyled`}>
			<TodoTextCont text={text} id={id} markCompleted={fnMarkCompleted} />
		</li>
	);
}

export default Todo;
