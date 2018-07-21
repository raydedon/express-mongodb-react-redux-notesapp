import * as React from 'react';
import '../../../stylesheets/todo.scss';
import {ITodo, ITodoMarkCompleted} from "../../index";
import TodoTextCont from '../containers/todo-text-cont';

interface ITodoProps extends ITodo, ITodoMarkCompleted {}

class Todo extends React.Component<ITodoProps, {}> {
	public markCompleted(this: Todo) {
		const {id, completed, markCompleted} = this.props;
		markCompleted(id, !completed);
	}

	public render() {
		const {id, completed, text} = this.props;
		return (
			<li className={`todo-item ${completed ? 'todo-completed' : 'todo-notcomplete'} list-unstyled`}>
				<TodoTextCont text={text} id={id} markCompleted={this.markCompleted} />
			</li>
		);
	}
}

export default Todo;
