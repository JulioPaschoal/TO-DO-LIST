// CONF. MODULOS \\
const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const connectToDb = require('./database/db');

//---------- CONF. BD ----------\\
connectToDb();
const app = express();
const port = process.env.PORT || 3000;

//---------- CONF. ENGINE ----------\\
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

//---------- CONF. ROTAS ----------\\
app.use(routes);

//---------- CONF. SERVIDOR ----------\\
app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);
});
