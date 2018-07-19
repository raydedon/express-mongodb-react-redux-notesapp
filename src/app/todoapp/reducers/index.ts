import {AnyAction, combineReducers} from 'redux';
import addTodoText from './add-todo-text';
import list from './todos';
import editTodoObj from './edit-todo-obj';
import {IStoreState} from "../../index";

const rootReducer= combineReducers<IStoreState, AnyAction>({
	addTodoText,
	editTodoObj,
	list
});

export default rootReducer;