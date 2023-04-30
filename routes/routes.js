// CONF. MODULOS \\
const routes = require('express').Router();
const TaskCotroller = require('../controller/TaskController');

routes.get('/', TaskCotroller.getAllTasks);

module.exports = routes;
