//---------- CONF. MODULOS ----------\\
const mongoose = require('mongoose');

//---------- CONF. DATABASE ----------\\
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

//---------- CONF. EXPORTS ----------\\
module.exports = mongoose.model('Task', taskSchema);
