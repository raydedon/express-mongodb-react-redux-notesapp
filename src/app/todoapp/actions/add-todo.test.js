import {CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, createTodo, createTodoSuccess} from './add-todo';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import {ROOT_URL} from "../../utility";

describe('actions', () => {
	it('should recieve todo', () => {
		const text = 'Finish docs', id = '123', completed = false;
		const expectedAction = {
			type: 'CREATE_TODO_SUCCESS',
			payload: {id, text, completed}
		};
		expect(createTodoSuccess({
			_id: id,
			text,
			completed
		})).toEqual(expectedAction);
	});
	
});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({todos: []});
describe('async actions', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it('creates CREATE_TODO_SUCCESS when creating todo has been done', () => {
		fetchMock
			.postOnce(`${ROOT_URL}/todos`, {
				body: [{
					_id: '5b58addaaa0f9913ec128012',
					text: 'housing',
					completed: false,
					createdAt: '2018-07-25T17:05:30.101Z',
					updatedAt: '2018-07-25T17:05:30.101Z',
					__v: 0,
					id: '5b58addaaa0f9913ec128012'
				}],
				headers: {'content-type': 'application/json'}
			});


		const expectedActions = [
			{
				type: CREATE_TODO_REQUEST
			},
			{
				type: CREATE_TODO_SUCCESS,
				payload: {
					id: '5b58addaaa0f9913ec128012',
					text: 'housing',
					completed: false
				}
			}
		];

		store.dispatch(createTodo('housing')).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

});