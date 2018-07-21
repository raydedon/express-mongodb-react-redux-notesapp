import * as React from 'react';
import {ITodosList} from "../../index";
import Todo from './todo';

interface ITodoListProps extends ITodosList {
	markCompleted: (id: string, completed: boolean) => void;
}

const TodoList: React.SFC<ITodoListProps> = (props) => {
	const renderListItems = () => {
		const {list, markCompleted} = props;
		return list.map((todo) => (
			<Todo completed={todo.completed}
			      markCompleted={markCompleted}
			      text={todo.text}
			      key={todo.id}
			      id={todo.id} />
		));
	}
	return <ul>{renderListItems()}</ul>;
}


export default TodoList;

