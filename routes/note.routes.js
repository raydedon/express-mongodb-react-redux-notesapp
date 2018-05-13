var express = require('express');
var router = express.Router();
const notes = require('../controllers/note.controller');

router.post('/', notes.create);

router.get('/', notes.findAll);

router.get('/:noteId', notes.findOne);

router.put('/:noteId', notes.update);

router.delete('/:noteId', notes.delete);


module.exports = router;
