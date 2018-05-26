import React from 'react';
import AddTodoCont from './containers/add-todo-cont';
import TodoListCont from './containers/todo-list-cont';
import Footer from './components/footer';
import {Route} from 'react-router-dom';

const TodoListApp = () => {
	return [
		<AddTodoCont key="AddTodoCont" />,
		<Route path="/:filter" render={(props) => {
			console.info(JSON.stringify(props));
			return (
				<TodoListCont key="TodoListCont" filter={props.match.params.filter || 'SHOW_ALL'} />
			);
		}}
		key="maincontent" />,

		<Footer key="footer" />
	];
};

export default TodoListApp;

