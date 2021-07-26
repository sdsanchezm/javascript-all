// para configurar el prjecto 
// src --> todo el codigo
// index.js -> arranca el project
// app.js -> configurar el servidor o la application
// views -> htmls files
// routes -> rutas del servidor
// folder public -> archivos publicos del servidor
// modulos instalados: morgan, express, express-handlebars, firebase-admin, path viene por default, 
/*
el modulo nodemon (para preview la vaina sin reload), 
hay que modificar el package.json : el objeto scripts, para anadir el shortcut y se ejecuta con 'npm run dev'

export GOOGLE_APPLICATION_CREDENTIALS="/Users/ss/Desktop/progs/temp/firebase-node-app/FileFromFirebase.json"
*/

const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { mainModule } = require('process');

const app = express();

// settings 
app.set('port', process.env.PORT || 4000); // setear el puerto
app.set('views', path.join(__dirname, 'views')); // setear por defecto donde esta las views, en el __dirname
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes 
app.use( require('./routes/index') );

// static files
app.set(express.static(path.join(__dirname, 'public')));

module.exports = app;