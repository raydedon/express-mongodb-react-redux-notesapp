import * as React from 'react';
import '../../../stylesheets/todo-text.scss';
import {ITodoId, ITodoText} from "../../index";

interface ITodoTextProps extends ITodoId, ITodoText {
	editActive: boolean;
	editTodoText: string;
	markCompleted: (id: string, text: string) => void;
	onCancelEditTodoText: () => void;
	onDeleteTodo: (id: string) => void;
	onEditTodoText: (id: string, text: string) => void;
	onEditTodoTextChange: (text: string) => void;
	onSaveTodoText: (id: string, text: string) => void;
	
}

class TodoText extends React.Component<ITodoTextProps, {}> {
	public editTodo(event: React.MouseEvent<HTMLAnchorElement>) {
		event.stopPropagation();
		const {id, text, onEditTodoText} = this.props;
		onEditTodoText(id, text);
	}

	public saveTodo(event: React.MouseEvent<HTMLAnchorElement>) {
		event.stopPropagation();
		const {id, editTodoText, onSaveTodoText} = this.props;
		onSaveTodoText(id, editTodoText);
	}

	public cancelEditTodo(event: React.MouseEvent<HTMLAnchorElement>) {
		event.stopPropagation();
		const {onCancelEditTodoText} = this.props;
		onCancelEditTodoText();
	}

	public onEditTodoTextChange(event: React.ChangeEvent<HTMLInputElement>) {
		const {onEditTodoTextChange} = this.props;
		onEditTodoTextChange(event.currentTarget.value);
	}

	public markCompleted() {
		const {id, markCompleted} = this.props;
		markCompleted(id, '');
	}

	public onDeleteTodo(event: React.MouseEvent<HTMLAnchorElement>) {
		event.stopPropagation();
		const {id, onDeleteTodo} = this.props;
		onDeleteTodo(id);
	}

	public render() {
		const {text, editTodoText, editActive} = this.props;
		return (
			<div className={`todo-text-display ${editActive ? 'edit-active' : ''}`}>
				<div className="readonly-todo" onClick={this.markCompleted}>
					<span className="todo-text h5">{text}</span>
					<a onClick={this.editTodo} className="todo-text-edit"><i className="fa fa-pencil" /></a>
					<a onClick={this.onDeleteTodo} className="todo-text-edit"><i className="fa fa-times-circle" /></a>
				</div>
				<div className="edit-todo">
					<input type="text"
					       value={editTodoText}
					       onChange={this.onEditTodoTextChange}
					       className="todo-input form-control" />
					<a onClick={this.saveTodo} className="todo-text-save"><i className="fa fa-check" /></a>
					<a onClick={this.cancelEditTodo} className="todo-text-save"><i className="fa fa-times" /></a>
				</div>
			</div>
		);
	}
}

export default TodoText;
