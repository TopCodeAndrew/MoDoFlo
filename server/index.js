require('dotenv').config();
const express = require('express');
const massive = require('massive')
const session = require('express-session');
const authCtrl = require('./controllers/authController');
const blockCtrl = require('./controllers/blockController');
const sessionCtrl = require('./controllers/sessionController');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
    })
)

app.post('/api/register', authCtrl.registerUser)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () => {
        console.log(`Server jamming on port ${SERVER_PORT}`)
    })
})
