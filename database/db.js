//---------- CONF. MODULOS ----------\\

const mongoose = require('mongoose');

//---------- CONF. DB ----------\\
const connectToDb = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB Atlas CONECTADO!'))
        .catch(err => console.log(err));
};

//---------- CONF. EXPORTS ----------\\
module.exports = connectToDb;
