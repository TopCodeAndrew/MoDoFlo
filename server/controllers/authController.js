const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')

        const { email, password } = req.body;

        // First, just get it to be able to post WITHOUT checking to see if the user exists (I will add that functionality later)

        const salt = bcrypt.genSaltSync(10);

        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.create_new_user([email, hash])

        req.session.user = newUser;

        res.status(200).send(newUser)
    }
}