//---------- CONF. MODOLUS ----------\\
const Task = require('../models/Task');

//---------- CONF. GET ----------\\
const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.render('index', tasksList);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

//---------- CONF. CREATE ----------\\
const createTask = async (req, res) => {
    const task = req.body;
    if (!task.task) {
        return res.redirect('/');
    }
    try {
        await Task.create(task);
        return res.redirect('/');
    } catch (error) {
        res.status(500).send({ error: err.message });
    }
};

//---------- CONF. EXPORTS ----------\\
module.exports = {
    getAllTasks,
    createTask,
};
