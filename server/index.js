require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    controller = require('./controller'),
    massive = require('massive');

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env;


const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db) => {
    console.log('connected to database');
    app.set('db', db);
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))


app.post('/:id', controller.create);



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})