import {PUT_REQUEST, ROOT_URL} from '../../utility';
import {ITodo, ISetVisibilityFilter, IFilter} from "./model";
import ActionTypeKeys from "./action-type-keys";



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

export const setVisibilityFilter: (filterType: string) => ISetVisibilityFilter = filterType => ({
	type: ActionTypeKeys.SET_VISIBILITY_FILTER,
	payload: {
		filterType
	}
});

/*
export const markCompleted = (id, completed) => {
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

const markCompletedRequest = () => ({
	type: TODO_MARK_COMPLETED_REQUEST
});

const markCompletedSuccess = (todo) => ({
	type: TODO_MARK_COMPLETED_SUCCESS,
	payload: {...todo}
});

const markCompletedFailure = () => ({
	type: TODO_MARK_COMPLETED_FAILURE
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};
*/
