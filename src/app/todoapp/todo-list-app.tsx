import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {Route} from 'react-router-dom';
import {VisibilityFilters} from './actions/index';
import Footer from './components/footer';
import AddTodoCont from './containers/add-todo-cont';
import TodoListCont from './containers/todo-list-cont';

interface IFilterProps {
	filter: VisibilityFilters;
};

const TodoListApp: React.SFC<{}> = () => {
	const TodoList = (props: RouteComponentProps<IFilterProps>) => <TodoListCont key="TodoListCont" filter={props.match.params.filter || VisibilityFilters.SHOW_ALL} />;
	return (
		<React.Fragment>
			<AddTodoCont key="AddTodoCont" />
			<Route path="/:filter" component={TodoList} key="maincontent" />
			<Footer key="footer" />
		</React.Fragment>
	);
};

export default TodoListApp;

