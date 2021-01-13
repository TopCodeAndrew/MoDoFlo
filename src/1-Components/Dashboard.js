import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function Dashboard(props) {
    const [sessions, setSessions] = useState(["there are no sessions"])
    console.log(sessions)
    const { userID } = props

    useEffect(() => {

        axios.get('/api/sessions').then(res => {
            setSessions(res.data)
            console.log(res.data)
        })
    }, [])

    let mappedSessions = sessions.map(e => {
        return (
            <div>
                <h1 onClick={() => console.log(`clicked on ${e.session_id}`)}>
                    {e.session_name}
                </h1>
                <button>delete</button>
                <button>edit name</button>
                <button>test</button>
            </div>

        )
    })


    return (
        <div className='dashboard'>{mappedSessions}</div>
    )
}




function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {})(Dashboard)