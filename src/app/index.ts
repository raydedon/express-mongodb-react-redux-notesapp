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
	list: Array<ITodo>;
}

export interface IStoreState {
	readonly addTodoText: string;
	list: Array<ITodo>;
	editTodoObj: IEditTodo;
}

export interface IReduxAction {
	readonly type: string;
	payload?: ITodoText | ITodoId | ITodoCompleted | IEditTodo | ITodo;
}

export interface IFilter {
	readonly filterType: string;
}

export interface IGenericPayload {
	text?: string;
	id?: string;
	list?: Array<ITodo>;
	completed?: boolean;
}

export type ActionTypes = IFetchTodosRequestAction |
	IFetchTodosSuccessAction |
	IFetchTodosFailureAction |
	ICreateTodoRequestAction |
	ICreateTodoSuccessAction |
	ICreateTodoFailureAction |
	IAddTodoTextChangeAction |
	IMarkCompletedRequestAction |
	IMarkCompletedSuccessAction |
	IMarkCompletedFailureAction |
	ISetVisibilityFilterAction |
	IEditTodoTextChangeAction |
	IEditTodoTextAction |
	ICancelEditTodoTextAction |
	ISaveTodoTextAction |
	IDeleteTodoRequestAction |
	IDeleteTodoSuccessAction |
	IDeleteTodoFailureAction;
	
export type TodosListActionTypes = ICreateTodoSuccessAction |
	IMarkCompletedSuccessAction |
	ISaveTodoTextAction |
	IFetchTodosSuccessAction |
	IDeleteTodoSuccessAction;

export type EditTodoActionTypes = IEditTodoTextAction |
	ICancelEditTodoTextAction |
	ISaveTodoTextAction;

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

export type IFetchTodosRequestAction = Action<ActionTypeKeys.FETCH_TODOS_REQUEST>

export interface IFetchTodosSuccessAction extends Action<ActionTypeKeys.FETCH_TODOS_SUCCESS> {
	readonly payload: ITodosList;
}

export type IFetchTodosFailureAction = Action<ActionTypeKeys.FETCH_TODOS_FAILURE>

export type ICreateTodoRequestAction = Action<ActionTypeKeys.CREATE_TODO_REQUEST>

export interface ICreateTodoSuccessAction extends Action<ActionTypeKeys.CREATE_TODO_SUCCESS> {
	readonly payload: ITodo;
}

export type ICreateTodoFailureAction = Action<ActionTypeKeys.CREATE_TODO_FAILURE>

export interface IAddTodoTextChangeAction extends Action<ActionTypeKeys.ADD_TODO_INPUT_TEXT_CHANGE> {
	readonly payload: ITodoText;
}

export type IMarkCompletedRequestAction = Action<ActionTypeKeys.TODO_MARK_COMPLETED_REQUEST>

export interface IMarkCompletedSuccessAction extends Action<ActionTypeKeys.TODO_MARK_COMPLETED_SUCCESS> {
	readonly payload: ITodo;
}

export type IMarkCompletedFailureAction = Action<ActionTypeKeys.TODO_MARK_COMPLETED_FAILURE>

export interface ISetVisibilityFilterAction {
	readonly type: ActionTypeKeys.SET_VISIBILITY_FILTER;
	readonly payload: IFilter;
}

export interface IEditTodoTextChangeAction extends Action<ActionTypeKeys.EDIT_TODO_INPUT_TEXT_CHANGE> {
	readonly payload: ITodoText;
}

export interface IEditTodoTextAction extends Action<ActionTypeKeys.EDIT_TODO_TEXT> {
	readonly payload: IEditTodo;
}

export interface ICancelEditTodoTextAction extends Action<ActionTypeKeys.CANCEL_EDIT_TODO_TEXT> {
	readonly payload: IEditTodo;
}

export interface ISaveTodoTextAction extends Action<ActionTypeKeys.SAVE_TODO_TEXT> {
	readonly payload: IEditTodo;
}

export interface IDeleteTodoRequestAction extends Action<ActionTypeKeys.DELETE_TODO_REQUEST> {
	readonly payload: ITodoId;
}

export interface IDeleteTodoSuccessAction extends Action<ActionTypeKeys.DELETE_TODO_SUCCESS> {
	readonly payload: ITodoId;
}

export interface IDeleteTodoFailureAction extends Action<ActionTypeKeys.DELETE_TODO_FAILURE> {
	readonly payload: ITodoId;
}
