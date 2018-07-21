import * as React from 'react';
import {ITodoMarkCompleted, ITodosList} from "../../index";
import Todo from './todo';

interface ITodoListProps extends ITodosList, ITodoMarkCompleted {}

class TodoList extends React.Component<ITodoListProps, {}> {
	public renderListItems(this: TodoList) {
		const {list, markCompleted} = this.props;
		return list.map((todo) => (
			<Todo completed={todo.completed}
			      markCompleted={markCompleted}
			      text={todo.text}
			      key={todo.id}
			      id={todo.id} />
		));
	}

	public render() {
		return <ul>{this.renderListItems()}</ul>;
	}
}

export default TodoList;

