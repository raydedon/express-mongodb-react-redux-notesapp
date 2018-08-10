import React, {Component} from 'react';
import Todo from './todo';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {markCompleted, VisibilityFilters} from '../actions';

const getVisibleTodos = (list, filter = VisibilityFilters.SHOW_ALL) => {
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

const mapStateToProps = (state, ownProps) => ({
	list: getVisibleTodos(state.list, ownProps.filter)
});

const mapDispatchToProps = dispatch => ({
	markCompleted: (id, completed) => dispatch(markCompleted(id, completed))
});


@connect(mapStateToProps, mapDispatchToProps)
class TodoList extends Component {
	constructor(props) {
		super(props);

		this.renderListItems = this.renderListItems.bind(this);
	}

	renderListItems() {
		let {list, markCompleted} = this.props;
		return list.map((todo) => (
			<Todo completed={todo.completed}
			      markCompleted={markCompleted}
			      text={todo.text}
			      key={todo.id}
			      id={todo.id} />
		));
	}

	render() {
		return <ul>{this.renderListItems()}</ul>;
	}
}

TodoList.proptypes = {
	markCompleted: PropTypes.func.isRequired,
	list: PropTypes.bool.isRequired,
};

TodoList.defaultProps = {
	list: [],
};

export default TodoList;

