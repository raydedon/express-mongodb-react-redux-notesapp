import * as React from 'react';
import {ITodosList} from "../../index";
import Todo from './todo';

interface ITodoListProps extends ITodosList {
	markCompleted: (id: string, completed: boolean) => (dispatch: any) => Promise<void>;
}

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

