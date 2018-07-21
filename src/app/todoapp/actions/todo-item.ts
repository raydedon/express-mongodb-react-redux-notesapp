import {
	ActionTypeKeys,
	ICancelEditTodoTextAction,
	IDeleteTodoFailureAction,
	IDeleteTodoRequestAction,
	IDeleteTodoSuccessAction,
	IEditTodoTextAction,
	IEditTodoTextChangeAction,
	ISaveTodoTextAction
} from "../../index";
import {DELETE_REQUEST, ROOT_URL} from '../../utility';

export const onEditTodoTextChange: (text: string) => IEditTodoTextChangeAction = text => ({
	payload: {text},
	type: ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE
});

export const onEditTodoText: (id: string, text: string) => IEditTodoTextAction = (id, text) => ({
	payload: {id, text},
	type: ActionTypeKeys.EDIT_TODO_TEXT
});

export const onCancelEditTodoText: () => ICancelEditTodoTextAction = () => ({
	payload: {},
	type: ActionTypeKeys.CANCEL_EDIT_TODO_TEXT
});

export const onSaveTodoText: (id: string, text: string) => ISaveTodoTextAction = (id, text) => ({
	payload: {id, text},
	type: ActionTypeKeys.SAVE_TODO_TEXT
});

export const deleteTodo: (id: string) => (dispatch: any) => Promise<void> = (id) => {
	return dispatch => {
		dispatch(deleteTodoRequest(id));
		return fetch(`${ROOT_URL}/todos/${id}`, {
			method: DELETE_REQUEST,
		})
			.then(
				r => r.json(),
				error => dispatch(deleteTodoFailure(id)))
			.then(() => dispatch(deleteTodoSuccess(id)))
			.catch(error => dispatch(deleteTodoFailure(id)));
	};
};

export const deleteTodoRequest: (id: string) => IDeleteTodoRequestAction = (id) => ({
	payload: {id},
	type: ActionTypeKeys.DELETE_TODO_REQUEST
});

export const deleteTodoSuccess: (id: string) => IDeleteTodoSuccessAction = (id) => ({
	payload: {id},
	type: ActionTypeKeys.DELETE_TODO_SUCCESS
});

export const deleteTodoFailure: (id: string) => IDeleteTodoFailureAction = (id) => ({
	payload: {id},
	type: ActionTypeKeys.DELETE_TODO_FAILURE
});
