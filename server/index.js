require('dotenv').config();
const express = require('express');
const massive = require('massive')
const session = require('express-session');
const authCtrl = require('./controllers/authController');
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
//  Auth Controllers
app.post('/api/register', authCtrl.registerUser)
app.post('/api/login', authCtrl.login)
app.delete('/api/logout', authCtrl.logout)

// Session Controllers
app.post('/api/sessions', sessionCtrl.createNewSession)
app.get('/api/sessions', sessionCtrl.getAllSessions)
app.get('/api/sessions/:session_id', sessionCtrl.getSingleSession)
app.put('/api/sessions/:session_id', sessionCtrl.editSession)
app.delete('/api/sessions/:session_id', sessionCtrl.deleteSession)

app.get('/api/sessions/:session_id/blocks', sessionCtrl.getAllBlocks)

app.post('/api/sessions/:session_id/blocks/:block_id', sessionCtrl.createBlock)


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
