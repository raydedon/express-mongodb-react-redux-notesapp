const Note = require('../models/note.model');

// Retrieve and return all notes from the database.
exports.create = (req, res) => {
	// Validate request
	if(!req.body.content) {
		return res.status(400).send({
			message: 'Note content can not be empty'
		});
	}

	// Create a Note
	const note = new Note({
		title: req.body.title || 'Untitled Note',
		content: req.body.content
	});

	// Save Note in the database
	note.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while creating the Note.'
			});
		});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	Note.findById(req.params.noteId)
		.then(note => {
			if(!note) {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			res.send(note);
		}).catch(err => {
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			return res.status(500).send({
				message: `Error retrieving note with id ${req.params.noteId}`
			});
		});
};

exports.findAll = (req, res) => {
	Note.find()
		.then(notes => {
			res.send(notes);
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Some error occurred while retrieving notes.'
			});
		});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	// Validate Request
	if(!req.body.content && !req.body.title) {
		return res.status(400).send({
			message: 'Note object can not be empty'
		});
	}

	let obj = {};
	if(req.body.title) {
		obj.title = req.body.title;
	}
	if(req.body.content) {
		obj.content = req.body.content;
	}
	// Find note and update it with the request body
	Note.findByIdAndUpdate(
		req.params.noteId,
		{$set: obj},
		{new: true}
	)
		.then(note => {
			if(!note) {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			res.send(note);
		})
		.catch(err => {
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			res.status(500).send({
				message: `Error updating note with id ${req.params.noteId}`
			});
		});
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	Note.findByIdAndRemove(req.params.noteId)
		.then(note => {
			if(!note) {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			res.send({message: 'Note deleted successfully!'});
		}).catch(err => {
			if(err.kind === 'ObjectId' || err.name === 'NotFound') {
				return res.status(404).send({
					message: `Note not found with id ${req.params.noteId}`
				});
			}
			return res.status(500).send({
				message: `Could not delete note with id ${req.params.noteId}`
			});
		});
};
