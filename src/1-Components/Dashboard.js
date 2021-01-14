import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Dashboard(props) {
    const { userID } = props
    const history = useHistory()

    const [sessions, setSessions] = useState([])
    const [newSessionName, setNewSessionName] = useState('')
    const [editSessionName, setEditSessionName] = useState('')


    useEffect(() => {
        axios.get('/api/sessions').then(res => {
            setSessions(res.data)
        })
    }, [])


    let createSession = async (title) => {
        if (title === '') {
            alert('Please give the session a name')
        } else {
            await axios.post('/api/sessions', { title }).then(res => {
                console.log(res)
            }).catch(err => console.log(err))
            axios.get('/api/sessions').then(res => {
                setSessions(res.data)
            })
            setNewSessionName('')
        }
    }

    let editSession = async (title, session_id) => {
        if (title === '') {
            alert('Please give the session a name')
        } else {
            await axios.put(`/api/sessions/${session_id}`, { title }).then(res => {
                console.log(res)
            }).catch(err => console.log(err))

            axios.get('/api/sessions').then(res => {
                setSessions(res.data)
            })
            setEditSessionName('')
        }
    }


    let deleteSession = async (id) => {
        await axios.delete(`/api/sessions/${id}`).then(res => {
            setSessions(res.data)
        })
    }


    let mappedSessions = sessions.map((e, i) => {
        return (
            <div key={e.session_id}>
                <h3>{i + 1}</h3>
                <h1 onClick={() => history.push(`/dashboard/${e.session_id}`)}>
                    {e.session_name}
                </h1>
                <button onClick={() => deleteSession(e.session_id)} >delete</button>
                <form>
                    <button
                        onClick={(event) => {
                            editSession(editSessionName, e.session_id)
                        }}
                    >edit name</button>
                    <input onChange={(e) => {
                        setEditSessionName(e.target.value, userID)
                    }}
                        placeholder='new name' />
                </form>
            </div>

        )
    })


    return (
        <div className='dashboard'>
            <h1>Your Sessions:</h1>
            <div>
                {mappedSessions}
            </div>
            <form>
                Create New Session:
                <input placeholder="session name here" onChange={(e) => {
                    setNewSessionName(e.target.value)
                }} value={newSessionName} />
                <button onClick={() => createSession(newSessionName)}>create</button>
            </form>
        </div>
    )
}




function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Dashboard)