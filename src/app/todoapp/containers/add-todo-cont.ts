import {connect} from 'react-redux';
import {IStoreState} from "../../index";
import {createTodo, onAddTodoTextChange} from '../actions/add-todo';
import AddTodo from '../components/add-todo';

const mapStateToProps = (state: IStoreState) => ({
	addTodoText: state.addTodoText
});

const mapDispatchToProps = (dispatch: any) => ({
	createAddTodoItem: (text: string) => dispatch(createTodo(text)),
	onAddTodoTextChange: (text: string) => dispatch(onAddTodoTextChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);