import {TODO_MARK_COMPLETED} from '../actions';
import {ADD_TODO, CREATE_TODO_SUCCESS, FETCH_TODOS_SUCCESS} from '../actions/add-todo';
import {SAVE_TODO_TEXT} from '../actions/todo-item';

const list = (state = [], action) => {
	let {type, text = '', id, list = [], completed = false} = action;
	switch(type) {
		case CREATE_TODO_SUCCESS:
			return [...state, {text, completed, id}];
		case ADD_TODO:
			return [...state, {text, completed, id}];
		case TODO_MARK_COMPLETED:
			return state.map(i => {
				return i.id === id ? {...i, completed: !i.completed} : i;
			});
		case SAVE_TODO_TEXT:
			return state.map(i => {
				return i.id === id ? {...i, text} : i;
			});
		case FETCH_TODOS_SUCCESS:
			return list;
		default:
			return state;
	}
};

export default list;