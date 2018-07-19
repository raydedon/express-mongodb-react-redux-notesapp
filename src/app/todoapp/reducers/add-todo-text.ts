import {ActionTypeKeys, addTodoTextReducerType} from "../../index";
import {AnyAction} from "redux";

const addTodoText: (state: addTodoTextReducerType, action: AnyAction) => addTodoTextReducerType =
	(state, action) => {
	let {type, payload: {text}} = action;
	switch(type) {
		case ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE:
			return text;
		default:
			return state;
	}
};

export default addTodoText;