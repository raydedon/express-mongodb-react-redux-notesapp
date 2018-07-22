import * as _ from "lodash";
import * as React from "react";

interface IAddTodoProps {
	createAddTodoItem: (text: string) => void;
	addTodoText: string;
	onAddTodoTextChange: (text: string) => void;
}

const AddTodo: React.SFC<IAddTodoProps> = ({addTodoText, createAddTodoItem, onAddTodoTextChange}) => {
	const onAddTodoTextChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
		onAddTodoTextChange(event.currentTarget.value);
	}

	const createAddTodoItemFn: () => void = () => {
		if (_.isEmpty(addTodoText)) { return; }
		createAddTodoItem(addTodoText);
		onAddTodoTextChange("");
	}
	
	return (
		<form>
			<div className="input-group mb-3">
				<input type="text"
				       className="form-control"
				       placeholder="Add Todo..."
				       onChange={onAddTodoTextChangeFn}
				       value={addTodoText} />
				<div className="input-group-append">
					<button className="btn btn-outline-secondary"
					        type="button"
					        onClick={createAddTodoItemFn}>
						<i className="fa fa-plus"/>
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddTodo;

