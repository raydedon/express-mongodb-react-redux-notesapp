import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.onAddTodoTextChange = this.onAddTodoTextChange.bind(this);
		this.createAddTodoItem = this.createAddTodoItem.bind(this);
	}

	onAddTodoTextChange(e) {
		let { onAddTodoTextChange } = this.props;
		onAddTodoTextChange(e.currentTarget.value);
	}

	createAddTodoItem(e) {
		let { createAddTodoItem, addTodoText, onAddTodoTextChange } = this.props;
		if(isEmpty(addTodoText)) return;
		createAddTodoItem(addTodoText);
		onAddTodoTextChange('');
	}

	render() {
		let { addTodoText } = this.props;
		return (
			<form>
				<input type="text" onChange={this.onAddTodoTextChange} value={addTodoText} placeholder="type..."/>
				<button type="button" onClick={this.createAddTodoItem}>+</button>
			</form>
		);
	}
}

AddTodo.proptypes = {
	createAddTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;


