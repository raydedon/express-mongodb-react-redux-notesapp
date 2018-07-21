import * as _ from "lodash";
import * as React from "react";

interface IAddTodoProps {
	createAddTodoItem: (text: string) => void;
	addTodoText: string;
	onAddTodoTextChange: (text: string) => void;
}

class AddTodo extends React.Component<IAddTodoProps, {}> {
	public onAddTodoTextChange(this: AddTodo, event: React.ChangeEvent<HTMLInputElement>): void {
		const {onAddTodoTextChange} = this.props;
		onAddTodoTextChange(event.currentTarget.value);
	}

	public createAddTodoItem(this: AddTodo) {
		const {createAddTodoItem, addTodoText, onAddTodoTextChange} = this.props;
		if (_.isEmpty(addTodoText)) { return; }
		createAddTodoItem(addTodoText);
		onAddTodoTextChange("");
	}

	public render() {
		const {addTodoText} = this.props;
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
							<i className="fa fa-plus"/>
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default AddTodo;

