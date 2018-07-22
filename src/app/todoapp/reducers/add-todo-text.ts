import {AnyAction} from "redux";
import {ActionTypeKeys, addTodoTextReducerType} from "../../index";

const addTodoText: (state: addTodoTextReducerType, action: AnyAction) => addTodoTextReducerType =
	(state = '', action) => {
	const {type, payload = {}} = action;
	switch(type) {
		case ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE:
			const {text = ''} = payload;
			return text;
		default:
			return state;
	}
};

export default addTodoText;