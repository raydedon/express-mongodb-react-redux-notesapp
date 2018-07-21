import {ActionTypeKeys, IEditTodoTextChangeAction} from "../../index";

const editTodoText: (state: string, action: IEditTodoTextChangeAction) => string = (state = '', action) => {
	const {type, payload: {text}} = action;
	switch(type) {
		case ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE:
			return text;
		default:
			return state;
	}
};

export default editTodoText;