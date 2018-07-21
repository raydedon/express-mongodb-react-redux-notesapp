import {Action} from "redux";

export interface ITodoText {
	readonly text: string;
}

export interface ITodoId {
	readonly id: string;
}

export interface ITodoCompleted {
	readonly completed: boolean;
}

export interface IEditTodo {
	readonly id?: string;
	readonly text?: string;
}

export interface ITodo extends ITodoId, ITodoText, ITodoCompleted {}

export interface ITodosList {
	list: ITodo[];
}

export type addTodoTextReducerType = string | undefined;
export type listReducerType = ITodo[] | undefined;
export type editTodoObjReducerType = IEditTodo | undefined;

export interface IStoreState {
	addTodoText: addTodoTextReducerType;
	editTodoObj: editTodoObjReducerType;
	list: listReducerType;
}

export interface IFilter {
	readonly filterType: string;
}

export enum ActionTypeKeys {
	SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
	TODO_MARK_COMPLETED_REQUEST = 'TODO_MARK_COMPLETED_REQUEST',
	TODO_MARK_COMPLETED_SUCCESS = 'TODO_MARK_COMPLETED_SUCCESS',
	TODO_MARK_COMPLETED_FAILURE = 'TODO_MARK_COMPLETED_FAILURE',
	FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
	CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST',
	CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
	CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE',
	ADD_TODO_INPUT_TEXT_CHANGE = 'ADD_TODO_INPUT_TEXT_CHANGE',
	EDIT_TODO_INPUT_TEXT_CHANGE = 'EDIT_TODO_INPUT_TEXT_CHANGE',
	EDIT_TODO_TEXT = 'EDIT_TODO_TEXT',
	CANCEL_EDIT_TODO_TEXT = 'CANCEL_EDIT_TODO_TEXT',
	SAVE_TODO_TEXT = 'SAVE_TODO_TEXT',
	DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST',
	DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
	DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE'
}

export type IFetchTodosRequestAction = Action<ActionTypeKeys>

export interface IFetchTodosSuccessAction extends Action<ActionTypeKeys> {
	readonly payload: ITodosList;
}

export type IFetchTodosFailureAction = Action<ActionTypeKeys>

export type ICreateTodoRequestAction = Action<ActionTypeKeys>

export interface ICreateTodoSuccessAction extends Action<ActionTypeKeys> {
	readonly payload: ITodo;
}

export type ICreateTodoFailureAction = Action<ActionTypeKeys>

export interface IAddTodoTextChangeAction extends Action<ActionTypeKeys> {
	readonly payload: ITodoText;
}

export type IMarkCompletedRequestAction = Action<ActionTypeKeys>

export interface IMarkCompletedSuccessAction extends Action<ActionTypeKeys> {
	readonly payload: ITodo;
}

export type IMarkCompletedFailureAction = Action<ActionTypeKeys>

export interface ISetVisibilityFilterAction {
	readonly type: ActionTypeKeys.SET_VISIBILITY_FILTER;
	readonly payload: IFilter;
}

export interface IEditTodoTextChangeAction extends Action<ActionTypeKeys> {
	readonly payload: ITodoText;
}

export interface IEditTodoTextAction extends Action<ActionTypeKeys> {
	readonly payload: IEditTodo;
}

export interface ICancelEditTodoTextAction extends Action<ActionTypeKeys> {
	readonly payload: IEditTodo;
}

export interface ISaveTodoTextAction extends Action<ActionTypeKeys> {
	readonly payload: IEditTodo;
}

export interface IDeleteTodoRequestAction extends Action<ActionTypeKeys> {
	readonly payload: ITodoId;
}

export interface IDeleteTodoSuccessAction extends Action<ActionTypeKeys> {
	readonly payload: ITodoId;
}

export interface IDeleteTodoFailureAction extends Action<ActionTypeKeys> {
	readonly payload: ITodoId;
}
