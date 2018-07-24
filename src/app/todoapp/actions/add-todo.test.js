import {createTodoSuccess} from "./add-todo";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

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
		})).toEqual(expectedAction)
	})
});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
	afterEach(() => {
		fetchMock.reset()
		fetchMock.restore()
	})
	
})