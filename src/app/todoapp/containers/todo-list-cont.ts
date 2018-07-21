import {connect} from 'react-redux';
import {IStoreState, ITodo} from "../../index";
import {markCompleted, VisibilityFilters} from '../actions/index';
import TodoList from '../components/todo-list';

const getVisibleTodos: (list: any[], filter: VisibilityFilters) => any[] = (list, filter = VisibilityFilters.SHOW_ALL) => {
	switch(filter) {
		case VisibilityFilters.SHOW_COMPLETED: {
			return list.filter(t => t.completed);
		}
		case VisibilityFilters.SHOW_ACTIVE: {
			return list.filter(t => !t.completed);
		}
		case VisibilityFilters.SHOW_ALL: {
			return list;
		}
		default: {
			return list;
		}
	}
};

interface ITodoListContProps {
	filter: VisibilityFilters;
}

const mapStateToProps = (state: IStoreState, ownProps: ITodoListContProps) => ({
	list: getVisibleTodos((state.list as ITodo[]), ownProps.filter)
});

const mapDispatchToProps = (dispatch: any) => ({
	markCompleted: (id: string, completed: boolean) => dispatch(markCompleted(id, completed))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);