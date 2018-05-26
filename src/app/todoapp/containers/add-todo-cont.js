import {connect} from 'react-redux';
import {incCounter, createTodo, onAddTodoTextChange} from '../actions/add-todo';
import AddTodo from '../components/add-todo';

const mapStateToProps = state => ({
	addTodoText: state.addTodoText
});

const mapDispatchToProps = dispatch => ({
	createAddTodoItem: text => dispatch(createTodo(text, incCounter())),
	onAddTodoTextChange: text => dispatch(onAddTodoTextChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);