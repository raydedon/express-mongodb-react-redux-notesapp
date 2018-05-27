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
		.then(Todos => {
			res.send(Todos);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while retrieving Todos.'});
		});
};
