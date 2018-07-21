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
	type: ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE,
	payload: {
		text
	}
});

export const onEditTodoText: (id: string, text: string) => IEditTodoTextAction = (id, text) => ({
	type: ActionTypeKeys.EDIT_TODO_TEXT,
	payload: {
		id,
		text
	}
});

export const onCancelEditTodoText: () => ICancelEditTodoTextAction = () => ({
	type: ActionTypeKeys.CANCEL_EDIT_TODO_TEXT,
	payload: {}
});

export const onSaveTodoText: (id: string, text: string) => ISaveTodoTextAction = (id, text) => ({
	type: ActionTypeKeys.SAVE_TODO_TEXT,
	payload: {
		id,
		text
	}
});

export const deleteTodo: (id: string) => (dispatch: any) => Promise<void> = (id) => {
	return dispatch => {
		dispatch(deleteTodoRequest(id));
		return fetch(`${ROOT_URL}/todos/${id}`, {
			method: DELETE_REQUEST,
		})
			.then(
				r => r.json(),
				error => {
					console.log('An error occurred.', error);
					dispatch(deleteTodoFailure(id));
				})
			.then(() => dispatch(deleteTodoSuccess(id)))
			.catch(error => {
				console.log('An error occurred.', error);
				dispatch(deleteTodoFailure(id));
			});
	};
};

export const deleteTodoRequest: (id: string) => IDeleteTodoRequestAction = (id) => ({
	type: ActionTypeKeys.DELETE_TODO_REQUEST,
	payload: {
		id
	}
});

export const deleteTodoSuccess: (id: string) => IDeleteTodoSuccessAction = (id) => ({
	type: ActionTypeKeys.DELETE_TODO_SUCCESS,
	payload: {
		id
	}
});

export const deleteTodoFailure: (id: string) => IDeleteTodoFailureAction = (id) => ({
	type: ActionTypeKeys.DELETE_TODO_FAILURE,
	payload: {
		id
	}
});
