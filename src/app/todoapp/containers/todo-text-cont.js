import { connect } from 'react-redux';
import TodoText from '../components/todo-text'
import {onEditTodoText, onEditTodoTextChange, onSaveTodoText} from "../actions/todo-item";

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.id,
	editTodoText: state.editTodoObj.text ? state.editTodoObj.text : '',
	text: ownProps.text,
	editActive: state.editTodoObj && state.editTodoObj.id  && state.editTodoObj.id === ownProps.id ? true : false,
	markCompleted: ownProps.markCompleted
});


const mapDispatchToProps = dispatch => ({
	onEditTodoTextChange: text => dispatch(onEditTodoTextChange(text)),
	onEditTodoText: (id, text) => dispatch(onEditTodoText(id, text)),
	onSaveTodoText: (id, text) => dispatch(onSaveTodoText(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
