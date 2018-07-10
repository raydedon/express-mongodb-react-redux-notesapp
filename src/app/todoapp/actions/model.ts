import ActionTypeKeys from "./action-type-keys";

export interface IFilter {
	readonly filterType: string;
};

export interface ISetVisibilityFilter {
	readonly type: ActionTypeKeys.SET_VISIBILITY_FILTER;
	readonly payload: IFilter;
};

export interface ITodo {
	readonly id?: string;
	readonly text?: string;
	readonly completed?: boolean;
};
