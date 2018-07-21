import * as React from 'react';
import '../../../stylesheets/todo-text.scss';
import {ITodoTextProps} from "../containers/todo-text-cont";

const TodoText: React.SFC<ITodoTextProps> = (props) => {
	const editTodo = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.stopPropagation();
		const {id, text, onEditTodoText} = props;
		onEditTodoText(id, text);
	}
	
	const saveTodo = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.stopPropagation();
		const {id, editTodoText, onSaveTodoText} = props;
		onSaveTodoText(id, editTodoText);
	}
	
	const cancelEditTodo = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.stopPropagation();
		const {onCancelEditTodoText} = props;
		onCancelEditTodoText();
	}
	
	const onEditTodoTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {onEditTodoTextChange} = props;
		onEditTodoTextChange(event.currentTarget.value);
	}
	
	const markCompleted = () => {
		const {id, markCompleted} = props;
		markCompleted(id, '');
	}
	
	const onDeleteTodo = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.stopPropagation();
		const {id, onDeleteTodo} = props;
		onDeleteTodo(id);
	}
	
	const {text, editTodoText, editActive} = props;
	return (
		<div className={`todo-text-display ${editActive ? 'edit-active' : ''}`}>
			<div className="readonly-todo" onClick={markCompleted}>
				<span className="todo-text h5">{text}</span>
				<a onClick={editTodo} className="todo-text-edit"><i className="fa fa-pencil" /></a>
				<a onClick={onDeleteTodo} className="todo-text-edit"><i className="fa fa-times-circle" /></a>
			</div>
			<div className="edit-todo">
				<input type="text"
				       value={editTodoText}
				       onChange={onEditTodoTextChange}
				       className="todo-input form-control" />
				<a onClick={saveTodo} className="todo-text-save"><i className="fa fa-check" /></a>
				<a onClick={cancelEditTodo} className="todo-text-save"><i className="fa fa-times" /></a>
			</div>
		</div>
	);
}

export default TodoText;
