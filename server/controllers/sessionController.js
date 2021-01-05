module.exports = {
    createNewSession: async (req, res) => {
        const db = req.app.get('db')

        const { user_id } = req.session.user
        const { title } = req.body

        db.create_session([user_id, title]).then(session => {
            res.status(200).send(session)
        })

    },

    getAllSessions: async (req, res) => { },

    getSingleSession: async (req, res) => { },

    editSession: async (req, res) => { },

    deleteSession: async (req, res) => { },
}