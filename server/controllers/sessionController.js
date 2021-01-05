module.exports = {
    // MUST BE LOGGED IN FOR THIS TO WORK
    createNewSession: async (req, res) => {
        const db = req.app.get('db')

        const { user_id } = req.session.user
        const { title } = req.body

        db.create_session([user_id, title]).then(session => {
            res.status(200).send(session)
        }).catch(err => res.status(400).send(err))

    },

    getAllSessions: async (req, res) => {
        const db = req.app.get('db')

        const { user_id } = req.session.user

        db.find_all_user_sessions([user_id])
            .then(sessions => {
                res.status(200).send(sessions)
            })
    },

    getSingleSession: async (req, res) => {
        const db = req.app.get('db')

        const { user_id } = req.session.user
        const { session_id } = req.params
        // console.log(user_id, session_id)

        db.find_one_user_session([user_id, session_id])
            .then(session => {
                res.status(200).send(session)
            })
    },

    editSession: async (req, res) => { },

    deleteSession: async (req, res) => { },
}