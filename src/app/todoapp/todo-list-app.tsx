import * as React from 'react';
import {Route} from 'react-router-dom';
import {VisibilityFilters} from './actions/index';
import Footer from './components/footer';
import AddTodoCont from './containers/add-todo-cont';
import TodoListCont from './containers/todo-list-cont';

const TodoListApp: React.SFC<{}> = () => {
	const routeRender = (props) => <TodoListCont key="TodoListCont" filter={props.match.params.filter || VisibilityFilters.SHOW_ALL} />;
	return (
		<React.Fragment>
			<AddTodoCont key="AddTodoCont" />
			<Route path="/:filter" render={routeRender} key="maincontent" />
			<Footer key="footer" />
		</React.Fragment>
	);
};

export default TodoListApp;

