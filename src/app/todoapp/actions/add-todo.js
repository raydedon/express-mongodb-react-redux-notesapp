export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_INPUT_TEXT_CHANGE = 'ADD_TODO_INPUT_TEXT_CHANGE';

let counter = 1;
export function incCounter() {
	return ++counter;
}

export const createTodo = (text, todoId) => ({
	type: ADD_TODO,
	id: todoId,
	text,
	completed: false
});

export const onAddTodoTextChange = text => ({
	type: ADD_TODO_INPUT_TEXT_CHANGE,
	text
});

