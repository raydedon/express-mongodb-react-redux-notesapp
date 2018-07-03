const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
	text: String,
	completed: Boolean
}, {
	timestamps: true
});

todoSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

todoSchema.set('toJSON', {
	virtuals: true
});

module.exports = mongoose.model('Todo', todoSchema);