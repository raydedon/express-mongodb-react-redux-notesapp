import {
	ActionTypeKeys,
	ITodo,
	ITodoId,
	ITodosList,
	listReducerType,
} from "../../index";
import {AnyAction} from "redux";

const list : (state: listReducerType, action: AnyAction) => ITodo[] = (state = [], action) => {
	let {type, payload} = action;
	switch(type) {
		case ActionTypeKeys.CREATE_TODO_SUCCESS:
			return [...state, {...payload as ITodo}];
			//todo
/*
		case ActionTypeKeys.TODO_MARK_COMPLETED_SUCCESS:
			return state.map(i => {
				return i.id === (payload as ITodo).id ? {...i, completed: !i.completed} : i;
			});
		case ActionTypeKeys.SAVE_TODO_TEXT:
			return state.map(i => {
				return i.id === (payload as IEditTodo).id ? {...i, text: (payload as IEditTodo).text} : i;
			});
*/
		case ActionTypeKeys.FETCH_TODOS_SUCCESS:
			return (payload as ITodosList).list;
		case ActionTypeKeys.DELETE_TODO_SUCCESS:
			return state.filter(i => i.id !== (payload as ITodoId).id);
		default:
			return state;
	}
};

export default list;