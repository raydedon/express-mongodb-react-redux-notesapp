import {ActionTypeKeys, editTodoObjReducerType, IEditTodo} from "../../index";
import {AnyAction} from "redux";

const editTodoObj: (state: editTodoObjReducerType, action: AnyAction) => IEditTodo = (state = {}, action) => {
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