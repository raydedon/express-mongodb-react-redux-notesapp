import {AnyAction, combineReducers} from 'redux';
import {IStoreState} from "../../index";
import addTodoText from './add-todo-text';
import editTodoObj from './edit-todo-obj';
import list from './todos';

const rootReducer= combineReducers<IStoreState, AnyAction>({
	addTodoText,
	editTodoObj,
	list
});

export default rootReducer;