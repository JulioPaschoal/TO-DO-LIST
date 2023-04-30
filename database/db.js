//CONF. MOFULOS \\
const mongoose = require('mongoose');

// CONF. CONEXAO BANDO DE DADOS \\
const connectToDb = () => {
    mongoose
        .connect(
            'mongodb+srv://root:admin@todolist2.2eacpbh.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        )
        .then(() => console.log('MongoDB Atlas CONECTADO!'))
        .catch(err => console.log(err));
};

module.exports = connectToDb;
