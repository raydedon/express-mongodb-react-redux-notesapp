import {connect} from 'react-redux';
import {IEditTodo, IStoreState, ITodoId, ITodoText} from "../../index";
import {
	deleteTodo,
	onCancelEditTodoText,
	onEditTodoText,
	onEditTodoTextChange,
	onSaveTodoText
} from '../actions/todo-item';
import TodoText from '../components/todo-text';

interface ITodoTextContProps extends ITodoId, ITodoText {
	markCompleted: () => void;
}

const mapStateToProps = (state: IStoreState, ownProps: ITodoTextContProps) => ({
	editActive: !!(state.editTodoObj && state.editTodoObj.id  && state.editTodoObj.id === ownProps.id),
	editTodoText: (state.editTodoObj as IEditTodo).text ? (state.editTodoObj as IEditTodo).text : '',
	id: ownProps.id,
	markCompleted: ownProps.markCompleted,
	text: ownProps.text
});


const mapDispatchToProps = dispatch => ({
	onCancelEditTodoText: () => dispatch(onCancelEditTodoText()),
	onDeleteTodo: (id: string) => dispatch(deleteTodo(id)),
	onEditTodoText: (id: string, text: string) => dispatch(onEditTodoText(id, text)),
	onEditTodoTextChange: (text: string) => dispatch(onEditTodoTextChange(text)),
	onSaveTodoText: (id: string, text: string) => dispatch(onSaveTodoText(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
