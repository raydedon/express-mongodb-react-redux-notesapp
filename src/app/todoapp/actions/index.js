export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TODO_MARK_COMPLETED = 'TODO_MARK_COMPLETED';


export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
});

export const markCompleted = id => ({
	type: TODO_MARK_COMPLETED,
	id
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};