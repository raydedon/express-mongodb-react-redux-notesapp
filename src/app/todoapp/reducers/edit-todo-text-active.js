import {EDIT_TODO_TEXT, SAVE_TODO_TEXT} from "../actions/todo-item";

const editTodoTextActive = (state = '', {type, id, editTodoTextActive}) => {
	switch (type) {
		case EDIT_TODO_TEXT:
			return {id, text};
		case SAVE_TODO_TEXT:
			return {};
		default:
			return state;
	}
};

export default editTodoTextActive;