import {connect} from 'react-redux';
import {
	onEditTodoText, onCancelEditTodoText, onEditTodoTextChange, onSaveTodoText,
	deleteTodo
} from '../actions/todo-item';
import React, {Component} from 'react';
import './todo-text.scss';

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.id,
	editTodoText: state.editTodoObj.text ? state.editTodoObj.text : '',
	text: ownProps.text,
	editActive: !!(state.editTodoObj && state.editTodoObj.id  && state.editTodoObj.id === ownProps.id),
	markCompleted: ownProps.markCompleted
});


const mapDispatchToProps = dispatch => ({
	onEditTodoTextChange: text => dispatch(onEditTodoTextChange(text)),
	onEditTodoText: (id, text) => dispatch(onEditTodoText(id, text)),
	onDeleteTodo: id => dispatch(deleteTodo(id)),
	onCancelEditTodoText: () => dispatch(onCancelEditTodoText()),
	onSaveTodoText: (id, text) => dispatch(onSaveTodoText(id, text))
});

@connect(mapStateToProps, mapDispatchToProps)
class TodoText extends Component {
	constructor(props) {
		super(props);

		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.onEditTodoTextChange = this.onEditTodoTextChange.bind(this);
		this.markCompleted = this.markCompleted.bind(this);
		this.cancelEditTodo = this.cancelEditTodo.bind(this);
		this.onDeleteTodo = this.onDeleteTodo.bind(this);
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

	onDeleteTodo(e) {
		e.stopPropagation();
		let {id, onDeleteTodo} = this.props;
		onDeleteTodo(id);
	}

	render() {
		let {text, editTodoText, editActive} = this.props;
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
