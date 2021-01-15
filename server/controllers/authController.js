const bcrypt = require('bcryptjs');
require('dotenv').config();
const nodemailer = require('nodemailer');
const { MY_EMAIL, MY_EMAIL_PASSWORD } = process.env;






module.exports = {
    registerUser: async (req, res) => {
        console.log(req.body);
        const db = req.app.get('db')
        const { email, password } = req.body;
        const [existingUser] = await db.find_user([email])
        if (existingUser) {
            return res.sendStatus(400)
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.create_new_user([email, hash])
        req.session.user = newUser;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: MY_EMAIL,
                pass: MY_EMAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: 'topcodeandrew@gmail.com',
            to: email,
            subject: 'MODOFLO Registration Confirmation',
            text: 'Thank you for registering for MODOFLO!'
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('ERROR_ERROR_ERROR_ERROR_ERROR_', err)
            } else { console.log("Sent!!!") }
        })

        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        const db = req.app.get('db')

        const { email, password } = req.body;

        const [existingUser] = await db.find_user([email])

        if (!existingUser) {
            return res.status(404).send('User does not exist')
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password')
        }

        delete existingUser.hash

        req.session.user = existingUser

        console.log(existingUser.user_id)

        res.status(200).send(existingUser)
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}
