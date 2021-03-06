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

        db.find_one_user_session([user_id, session_id])
            .then(session => {
                res.status(200).send(session)
            })
    },

    editSession: async (req, res) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user
        const { session_id } = req.params
        const { title } = req.body

        db.edit_session([title, user_id, session_id])
            .then(dbRes => {
                // Destructure just the name off
                let [session] = dbRes
                let { session_name } = session

                res.status(200).send(session_name)
            })
    },

    deleteSession: async (req, res) => {
        console.log('got to controller')
        const db = req.app.get('db')

        const { user_id } = req.session.user
        const { session_id } = req.params

        db.delete_session([user_id, session_id])
            .then(sessions => {
                res.status(200).send(sessions)
            })
    },

    createBlock: async (req, res) => {
        const db = req.app.get('db')

        const { block_type_id } = req.body
        const { session_id } = req.params

        db.create_block([session_id, block_type_id])
            .then(session => {
                res.status(200).send(session)
            })
    },

    getAllBlocks: async (req, res) => {
        const db = req.app.get('db')

        const { session_id } = req.params

        db.find_all_blocks([session_id])
            .then(sessions => {
                res.status(200).send(sessions)
            })
    },
}