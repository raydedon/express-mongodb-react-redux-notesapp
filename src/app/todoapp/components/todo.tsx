import * as React from 'react';
import * as S from '../../../stylesheets/todo.scss';
import {ITodo} from "../../index";
import TodoTextCont from '../containers/todo-text-cont';

interface ITodoProps extends ITodo {
	markCompleted: (id: string, completed: boolean) => void;
}

const Todo: React.SFC<ITodoProps> = (props) => {
	const markCompleted = () => {
		const {id, completed, markCompleted} = props;
		markCompleted(id, !completed);
	}

	const {id, completed, text} = props;
	return (
		<li className={`todo-item ${completed ? 'todo-completed' : 'todo-notcomplete'} list-unstyled`}>
			<TodoTextCont text={text} id={id} markCompleted={markCompleted} />
		</li>
	);
}

export default Todo;
