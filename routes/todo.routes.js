let express = require('express');
let router = express.Router();
const todos = require('../controllers/todo.controller');

router.post('/', todos.create);

router.get('/', todos.findAll);

router.put('/:todoId', todos.update);

module.exports = router;

