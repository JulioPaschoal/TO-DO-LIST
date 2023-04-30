//---------- CONF. MODULOS ----------\\
const routes = require('express').Router();
const TaskCotroller = require('../controller/TaskController');

//---------- CONF. ROTAS ----------\\
routes.get('/', TaskCotroller.getAllTasks);
routes.post('/create', TaskCotroller.createTask);

//---------- CONF. EXPORTS ----------\\
module.exports = routes;
