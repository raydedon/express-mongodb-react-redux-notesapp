const Todo = require('../models/todo.model');

exports.create = (req, res) => {
	// Create a Todo
	let {text = 'Untitled Todo', completed = false} = req.body;
	const todo = new Todo({text, completed});

	// Save Todo in the database
	todo.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Todo.'
			});
		});
};

exports.findAll = (req, res) => {
	Todo.find()
		.then(todos => {
			res.send(todos);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while retrieving Todos.'});
		});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	// Validate Request
	let {text = null, completed = null} = req.body;
	if(text === null && completed === null) {
		return res.status(400).send({
			message: 'Todo object can not be empty'
		});
	}

	let todo = {};
	if(text !== null) {
		todo.text = text;
	}
	if(completed !== null) {
		todo.completed = completed;
	}
	// Find note and update it with the request body
	Todo.findByIdAndUpdate(
		req.params.todoId,
		{$set: todo},
		{new: true}
	)
		.then(todo => {
			if(!todo) {
				return res.status(404).send({
					message: `Todo not found with id ${req.params.noteId}`
				});
			}
			res.send(todo);
		})
		.catch(err => {
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: `Todo not found with id ${req.params.todoId}`
				});
			}
			res.status(500).send({
				message: `Error updating todo with id ${req.params.todoId}`
			});
		});
};
