import React, {Component} from 'react';
import './todo-text.scss';

class TodoText extends Component {
	constructor(props) {
		super(props);

		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.onEditTodoTextChange = this.onEditTodoTextChange.bind(this);
		this.markCompleted = this.markCompleted.bind(this);
		this.cancelEditTodo = this.cancelEditTodo.bind(this);
	}

	editTodo(e) {
		e.stopPropagation();
		let {id, text, onEditTodoText} = this.props;
		onEditTodoText(id, text);
	}

	saveTodo(e) {
		e.stopPropagation();
		let {id, editTodoText, onSaveTodoText} = this.props;
		onSaveTodoText(id, editTodoText);
	}

	cancelEditTodo(e) {
		e.stopPropagation();
		let {onCancelEditTodoText} = this.props;
		onCancelEditTodoText();
	}

	onEditTodoTextChange(e) {
		let {onEditTodoTextChange} = this.props;
		onEditTodoTextChange(e.currentTarget.value);
	}

	markCompleted() {
		let {id, markCompleted} = this.props;
		markCompleted(id);
	}

	render() {
		let {text, editTodoText, editActive} = this.props;
		return (
			<div className={`todo-text-display ${editActive ? 'edit-active' : ''}`}>
				<div className="readonly-todo"
					 onClick={this.markCompleted}>
					<span className="todo-text">{text}</span>
					<a onClick={this.editTodo} className="todo-text-edit"><i className="fa fa-pencil"></i></a>
				</div>
				<div className="edit-todo">
					<input type="text"
					       value={editTodoText}
					       onChange={this.onEditTodoTextChange}
					       className="todo-input form-control" />
					<a onClick={this.saveTodo} className="todo-text-save"><i className="fa fa-check"></i></a>
					<a onClick={this.cancelEditTodo} className="todo-text-save"><i className="fa fa-times"></i></a>
				</div>
			</div>
		);
	}
}

export default TodoText;
