import {TODO_MARK_COMPLETED} from '../actions';
import {ADD_TODO} from '../actions/add-todo';
import {SAVE_TODO_TEXT} from '../actions/todo-item';

const list = (state = [], action) => {
	let {type, text = '', id} = action;
	switch(type) {
		case ADD_TODO:
			return [...state, {text, completed: false, id}];
		case TODO_MARK_COMPLETED:
			return state.map(i => {
				return i.id === id ? {...i, completed: !i.completed} : i;
			});
		case SAVE_TODO_TEXT:
			return state.map(i => {
				return i.id === id ? {...i, text} : i;
			});
		default:
			return state;
	}
};

export default list;