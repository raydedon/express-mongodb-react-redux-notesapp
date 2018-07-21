import * as React from 'react';
import '../../../stylesheets/todo-text.scss';

class TodoText extends React.Component {
	constructor(props) {
		super(props);

		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.onEditTodoTextChange = this.onEditTodoTextChange.bind(this);
		this.markCompleted = this.markCompleted.bind(this);
		this.cancelEditTodo = this.cancelEditTodo.bind(this);
		this.onDeleteTodo = this.onDeleteTodo.bind(this);
	}

	public editTodo(e) {
		e.stopPropagation();
		const {id, text, onEditTodoText} = this.props;
		onEditTodoText(id, text);
	}

	public saveTodo(e) {
		e.stopPropagation();
		const {id, editTodoText, onSaveTodoText} = this.props;
		onSaveTodoText(id, editTodoText);
	}

	public cancelEditTodo(e) {
		e.stopPropagation();
		const {onCancelEditTodoText} = this.props;
		onCancelEditTodoText();
	}

	public onEditTodoTextChange(e) {
		const {onEditTodoTextChange} = this.props;
		onEditTodoTextChange(e.currentTarget.value);
	}

	public markCompleted() {
		const {id, markCompleted} = this.props;
		markCompleted(id);
	}

	public onDeleteTodo(e) {
		e.stopPropagation();
		const {id, onDeleteTodo} = this.props;
		onDeleteTodo(id);
	}

	public render() {
		const {text, editTodoText, editActive} = this.props;
		return (
			<div className={`todo-text-display ${editActive ? 'edit-active' : ''}`}>
				<div className="readonly-todo"
					 onClick={this.markCompleted}>
					<span className="todo-text h5">{text}</span>
					<a onClick={this.editTodo} className="todo-text-edit">
						<i className="fa fa-pencil" />
					</a>
					<a onClick={this.onDeleteTodo} className="todo-text-edit">
						<i className="fa fa-times-circle" />
					</a>
				</div>
				<div className="edit-todo">
					<input type="text"
					       value={editTodoText}
					       onChange={this.onEditTodoTextChange}
					       className="todo-input form-control" />
					<a onClick={this.saveTodo} className="todo-text-save">
						<i className="fa fa-check" />
					</a>
					<a onClick={this.cancelEditTodo} className="todo-text-save">
						<i className="fa fa-times" />
					</a>
				</div>
			</div>
		);
	}
}

export default TodoText;
