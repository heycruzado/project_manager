const express = require('express');
const cors = require('cors');

const app = express();

// configuracion
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
