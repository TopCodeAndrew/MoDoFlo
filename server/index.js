require('dotenv').config();
const express = require('express');
const massive = require('massive')
const session = require('express-session');
const authCtrl = require('./controllers/authController');
const sessionCtrl = require('./controllers/sessionController');
// const { default: StripeCheckout } = require('react-stripe-checkout');
const { STRIPE_SECRET_KEY, SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const uuid = require('uuid').v4;

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
app.post('/auth/register', authCtrl.registerUser)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUserSession)

// Session Controllers
app.post('/api/sessions', sessionCtrl.createNewSession)
app.get('/api/sessions', sessionCtrl.getAllSessions)
app.get('/api/sessions/:session_id', sessionCtrl.getSingleSession)
app.put('/api/sessions/:session_id', sessionCtrl.editSession)
app.delete('/api/sessions/:session_id', sessionCtrl.deleteSession)
app.get('/api/sessions/:session_id/blocks', sessionCtrl.getAllBlocks)
app.post('/api/sessions/:session_id/blocks', sessionCtrl.createBlock)

// Stripe Endpoint
app.post('/donate', async (req, res) => {
    console.log('Backend Request line 39: ', req.body);

    let error;
    let status;
    try {
        const { donationAmount, token } = req.body;

        const customer = await
            stripe.customers.create({
                email: token.email,
                source: token.id
            });

        const idempotencyKey = uuid();
        const charge = await stripe.charges.create(
            {
                amount: donationAmount * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email,
                description: ` Made a donation to MoDoFlo`
            },
            { idempotencyKey }
        );
        status = 'success';
    } catch (err) {
        console.error('Error: ', err);
        status = 'failure'
    }
    res.json({ error, status })
})

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
