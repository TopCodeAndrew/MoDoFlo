const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')

        const { email, password } = req.body;

        // Add check func below
        const [existingUser] = await db.find_user([email])

        if (existingUser) {
            return res.status(404).send('User already exists')
        }
        // Add check func above

        const salt = bcrypt.genSaltSync(10);

        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.create_new_user([email, hash])

        req.session.user = newUser;

        res.status(200).send(newUser)
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}
