import React from 'react';
import AddTodoCont from "./containers/add-todo-cont";
import TodoListCont from "./containers/todo-list-cont";

const TodoListApp = () => [
	<AddTodoCont key="AddTodoCont"/>,
	<TodoListCont key="TodoListCont"/>
];

export default TodoListApp;

