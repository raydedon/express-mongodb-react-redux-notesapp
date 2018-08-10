import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import {connect} from 'react-redux';
import {createTodo, onAddTodoTextChange} from '../actions/add-todo';

const mapStateToProps = state => ({
	addTodoText: state.addTodoText
});

const mapDispatchToProps = dispatch => ({
	createAddTodoItem: text => dispatch(createTodo(text)),
	onAddTodoTextChange: text => dispatch(onAddTodoTextChange(text))
});

@connect(mapStateToProps, mapDispatchToProps)
class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.onAddTodoTextChange = this.onAddTodoTextChange.bind(this);
		this.createAddTodoItem = this.createAddTodoItem.bind(this);
	}

	onAddTodoTextChange(e) {
		let {onAddTodoTextChange} = this.props;
		onAddTodoTextChange(e.currentTarget.value);
	}

	createAddTodoItem() {
		let {createAddTodoItem, addTodoText, onAddTodoTextChange} = this.props;
		if(isEmpty(addTodoText)) return;
		createAddTodoItem(addTodoText);
		onAddTodoTextChange('');
	}

	render() {
		let {addTodoText} = this.props;
		return (
			<form>
				<div className="input-group mb-3">
					<input type="text"
					       className="form-control"
					       placeholder="Add Todo..."
					       onChange={this.onAddTodoTextChange}
					       value={addTodoText} />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary"
						        type="button"
						        onClick={this.createAddTodoItem}>
							<i className="fa fa-plus" />
						</button>
					</div>
				</div>
			</form>
		);
	}
}

AddTodo.proptypes = {
	createAddTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;


