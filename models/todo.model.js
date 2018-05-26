const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	text: String,
	completed: Boolean
}, {
	timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);