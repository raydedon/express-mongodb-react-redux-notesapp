import {ActionTypeKeys, EditTodoActionTypes, IEditTodo} from "../../index";

const editTodoObj: (state: IEditTodo, action: EditTodoActionTypes) => IEditTodo = (state, action) => {
	let {type, payload: {id, text}} = action;
	switch(type) {
		//todo
/*
		case ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE:
			return {...state, text};
*/
		case ActionTypeKeys.EDIT_TODO_TEXT:
			return {id, text};
		case ActionTypeKeys.CANCEL_EDIT_TODO_TEXT:
			return {};
		case ActionTypeKeys.SAVE_TODO_TEXT:
			return {};
		default:
			return state;
	}
};

export default editTodoObj;