import {AnyAction} from "redux";
import {ActionTypeKeys, IEditTodo} from "../../index";

const editTodoObj: (state: IEditTodo, action: AnyAction) => IEditTodo = (state = {}, action) => {
	const {type, payload} = action;
	switch(type) {
		case ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE:
			return payload;
		case ActionTypeKeys.EDIT_TODO_TEXT:
			return payload;
		case ActionTypeKeys.CANCEL_EDIT_TODO_TEXT:
			return payload;
		case ActionTypeKeys.SAVE_TODO_TEXT:
			return payload;
		default:
			return state;
	}
};

export default editTodoObj;