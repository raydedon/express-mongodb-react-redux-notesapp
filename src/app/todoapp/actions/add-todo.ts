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
			headers: {
				'Content-Type': 'application/json'
			},
			method: POST_REQUEST,
		})
			.then(
				r => r.json(),
				error => dispatch(createTodoFailure()))
			.then(r => dispatch(createTodoSuccess(Object.assign({}, r, {id: r._id}))));
	};
}

export const createTodoRequest: () => ICreateTodoRequestAction = () => ({
	type: ActionTypeKeys.CREATE_TODO_REQUEST
});

export const createTodoSuccess: (arg: ITodo) => ICreateTodoSuccessAction = ({id, text, completed}) => {
	return {
		payload: {id, text, completed},
		type: ActionTypeKeys.CREATE_TODO_SUCCESS
	};
};

export const createTodoFailure: () => ICreateTodoFailureAction = () => ({
	type: ActionTypeKeys.CREATE_TODO_FAILURE
});

export const onAddTodoTextChange: (text: string) => IAddTodoTextChangeAction = text => ({
	payload: {text},
	type: ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE
});

export const fetchTodos: () => (dispatch: any) => Promise<void> = () => {
	return (dispatch) => {
		dispatch(fetchTodosRequest());

		return fetch(`${ROOT_URL}/todos`)
			.then(
				r => r.json(),
				error => dispatch(fetchTodosFailure()))
			.then(r => dispatch(fetchTodosSuccess(r)));
	};
}

export const fetchTodosRequest: () => IFetchTodosRequestAction = () => ({
	type: ActionTypeKeys.FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess: (list: ITodo[]) => IFetchTodosSuccessAction = (list) => {
	return {
		payload: {
			list
		},
		type: ActionTypeKeys.FETCH_TODOS_SUCCESS
	};
};

export const fetchTodosFailure: () => IFetchTodosFailureAction = () => ({
	type: ActionTypeKeys.FETCH_TODOS_FAILURE
});
