import { connect } from 'react-redux';
import {markCompleted} from "../actions";
import TodoList from "../components/todo-list";

const getVisibleTodos = ({list, filter}) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return list.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return list.filter(t => !t.completed)
		case 'SHOW_ALL':
		default:
			return list
	}
}

const mapStateToProps = state => ({
	list: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
	markCompleted: id => dispatch(markCompleted(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)