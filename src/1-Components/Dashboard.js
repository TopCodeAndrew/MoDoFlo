import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function Dashboard(props) {
    const [sessions, setSessions] = useState([])
    console.log(sessions)

    useEffect(() => {

        axios.get('/api/sessions').then(res => {
            setSessions(res.data)
            console.log(res.data)
        })
    }, [])

    let deleteSession = async (id) => {
        await axios.delete(`/api/sessions/${id}`).then(res => {
            setSessions(res.data)
        })
    }

    let mappedSessions = sessions.map(e => {
        return (
            <div>
                <h3></h3>
                <h1 onClick={() => console.log(`clicked on ${e.session_id}`)}>
                    {e.session_name}
                </h1>
                <button onClick={() => deleteSession(e.session_id)} >delete</button>
                <button>edit name</button>
                <button>test</button>
            </div>

        )
    })


    return (
        <div className='dashboard'>
            <h1>Your Sessions:</h1>
            <div>
                {mappedSessions}
            </div>
            <button>Create New Session</button>
        </div>
    )
}




function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {})(Dashboard)