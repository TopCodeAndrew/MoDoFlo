const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body;
        const [existingUser] = await db.find_user([email])
        if (existingUser) {
            return res.status(404).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.create_new_user([email, hash])
        req.session.user = newUser;
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
