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

export interface ITodoTextProps extends ITodoId, ITodoText {
	editActive: boolean;
	editTodoText: string;
	markCompleted: (id: string, text: string) => void;
	onCancelEditTodoText: () => void;
	onDeleteTodo: (id: string) => void;
	onEditTodoText: (id: string, text: string) => void;
	onEditTodoTextChange: (text: string) => void;
	onSaveTodoText: (id: string, text: string) => void;
}

const mapStateToProps = (state: IStoreState, ownProps: ITodoTextProps) => ({
	editActive: state.editTodoObj && state.editTodoObj.id  && state.editTodoObj.id === ownProps.id,
	editTodoText: (state.editTodoObj as IEditTodo).text ? (state.editTodoObj as IEditTodo).text : '',
	id: ownProps.id,
	markCompleted: ownProps.markCompleted,
	text: ownProps.text
});


const mapDispatchToProps = (dispatch: any) => ({
	onCancelEditTodoText: () => dispatch(onCancelEditTodoText()),
	onDeleteTodo: (id: string) => dispatch(deleteTodo(id)),
	onEditTodoText: (id: string, text: string) => dispatch(onEditTodoText(id, text)),
	onEditTodoTextChange: (text: string) => dispatch(onEditTodoTextChange(text)),
	onSaveTodoText: (id: string, text: string) => dispatch(onSaveTodoText(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoText);
