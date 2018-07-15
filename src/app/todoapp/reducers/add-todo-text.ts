import {ActionTypeKeys, IAddTodoTextChangeAction} from "../../index";

const addTodoText: (state: string, action: IAddTodoTextChangeAction) => string = (state = '', action) => {
	let {type, payload: {text}} = action;
	switch(type) {
		case ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE:
			return text;
		default:
			return state;
	}
};

export default addTodoText;