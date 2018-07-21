import {
	ActionTypeKeys,
	IMarkCompletedFailureAction,
	IMarkCompletedRequestAction,
	IMarkCompletedSuccessAction,
	ISetVisibilityFilterAction,
	ITodo
} from "../../index";
import {PUT_REQUEST, ROOT_URL} from '../../utility';



/*
function setVisibilityFilter(filterType: string): ISetVisibilityFilter {
	return {
		type: ActionTypeKeys.SET_VISIBILITY_FILTER,
		payload: {
			filterType
		}
	}
}
*/

export const setVisibilityFilter: (filterType: string) => ISetVisibilityFilterAction = filterType => ({
	type: ActionTypeKeys.SET_VISIBILITY_FILTER,
	payload: {
		filterType
	}
});

export const markCompleted: (id: string, completed: boolean) => (dispatch: any) => Promise<void> = (id, completed) => {
	return dispatch => {
		
		dispatch(markCompletedRequest());

		return fetch(`${ROOT_URL}/todos/${id}`, {
			body: JSON.stringify({completed}),
			method: PUT_REQUEST,
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(
				r => r.json(),
				error => {
					console.log('An error occurred.', error);
					dispatch(markCompletedFailure());
				})
			.then(r => {
				dispatch(markCompletedSuccess(r));
			})
			.catch(error => {
				console.log('An error occurred.', error);
				dispatch(markCompletedFailure());
			});
	};
};

const markCompletedRequest: () => IMarkCompletedRequestAction = () => ({
	type: ActionTypeKeys.TODO_MARK_COMPLETED_REQUEST
});

const markCompletedSuccess: (todo: ITodo) => IMarkCompletedSuccessAction = (todo) => ({
	type: ActionTypeKeys.TODO_MARK_COMPLETED_SUCCESS,
	payload: {...todo}
});

const markCompletedFailure: () => IMarkCompletedFailureAction = () => ({
	type: ActionTypeKeys.TODO_MARK_COMPLETED_FAILURE
});


export enum VisibilityFilters {
	SHOW_ALL = 'SHOW_ALL',
	SHOW_COMPLETED = 'SHOW_COMPLETED',
	SHOW_ACTIVE = 'SHOW_ACTIVE'
}

