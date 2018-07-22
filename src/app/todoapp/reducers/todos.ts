import {AnyAction} from "redux";
import {
	ActionTypeKeys,
	ITodo,
	ITodoId,
	ITodosList,
} from "../../index";

const list: (state: ITodo[], action: AnyAction) => ITodo[] = (state = [], action) => {
	const {type, payload} = action;
	switch(type) {
		case ActionTypeKeys.CREATE_TODO_SUCCESS:
			return [...state, {...payload as ITodo}];
		case ActionTypeKeys.TODO_MARK_COMPLETED_SUCCESS:
			return state.map(i => {
				return i.id === payload.id ? {...i, completed: !i.completed} : i;
			});
		case ActionTypeKeys.SAVE_TODO_TEXT:
			return state.map(i => {
				return i.id === payload.id ? {...i, text: payload.text} : i;
			});
		case ActionTypeKeys.FETCH_TODOS_SUCCESS:
			return (payload as ITodosList).list;
		case ActionTypeKeys.DELETE_TODO_SUCCESS:
			return state.filter(i => i.id !== (payload as ITodoId).id);
		default:
			return state;
	}
};

export default list;