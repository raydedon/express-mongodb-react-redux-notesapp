import {
	ActionTypeKeys,
	IAddTodoTextChangeAction,
	ICreateTodoFailureAction,
	ICreateTodoRequestAction,
	ICreateTodoSuccessAction,
	IFetchTodosFailureAction,
	IFetchTodosRequestAction,
	IFetchTodosSuccessAction,
	ITodo
} from "../../index";
import {POST_REQUEST, ROOT_URL} from '../../utility';

export const createTodo: (text: string) => (dispatch: any) => Promise<void> = (text: string) => {
	return (dispatch: any) => {
		dispatch(createTodoRequest());

		return fetch(`${ROOT_URL}/todos`, {
			body: JSON.stringify({text}),
			method: POST_REQUEST,
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(
				r => r.json(),
				error => {
					console.log('An error occurred.', error);
					dispatch(createTodoFailure());
				})
			.then(r => dispatch(createTodoSuccess(Object.assign({}, r, {id: r._id}))));
	};
}

export const createTodoRequest: () => ICreateTodoRequestAction = () => ({
	type: ActionTypeKeys.CREATE_TODO_REQUEST
});

export const createTodoSuccess: (arg: ITodo) => ICreateTodoSuccessAction = ({id, text, completed}) => {
	return {
		type: ActionTypeKeys.CREATE_TODO_SUCCESS,
		payload: {id, text, completed}
	};
};

export const createTodoFailure: () => ICreateTodoFailureAction = () => ({
	type: ActionTypeKeys.CREATE_TODO_FAILURE
});

export const onAddTodoTextChange: (text: string) => IAddTodoTextChangeAction = text => ({
	type: ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE,
	payload: {
		text
	}
});

export const fetchTodos: () => (dispatch: any) => Promise<void> = () => {
	return (dispatch) => {
		dispatch(fetchTodosRequest());

		return fetch(`${ROOT_URL}/todos`)
			.then(
				r => r.json(),
				error => {
					console.log('An error occurred.', error);
					dispatch(fetchTodosFailure());
				})
			.then(r => dispatch(fetchTodosSuccess(r)));
	};
}

export const fetchTodosRequest: () => IFetchTodosRequestAction = () => ({
	type: ActionTypeKeys.FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess: (list: ITodo[]) => IFetchTodosSuccessAction = (list) => {
	return {
		type: ActionTypeKeys.FETCH_TODOS_SUCCESS,
		payload: {
			list
		}
	};
};

export const fetchTodosFailure: () => IFetchTodosFailureAction = () => ({
	type: ActionTypeKeys.FETCH_TODOS_FAILURE
});
