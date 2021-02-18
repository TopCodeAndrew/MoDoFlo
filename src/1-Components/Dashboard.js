import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import garbageCan from '../images/garbage.png';
import pencil from '../images/edit.png'


function Dashboard(props) {
    console.log('dashboard ln 8:', props)
    const { userID } = props
    const history = useHistory()

    const [sessions, setSessions] = useState([])
    const [newSessionName, setNewSessionName] = useState('')
    const [editSessionName, setEditSessionName] = useState('')
    const [toggleEdit, setToggleEdit] = useState(false)
    const [whichEdit, setWhichEdit] = useState(0)


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
            setWhichEdit(false)
            setToggleEdit(false)
        }
    }


    let deleteSession = async (id) => {
        console.log(id);
        await axios.delete(`/api/sessions/${id}`).then(res => {
            setSessions(res.data)
        })
    }

    function handleEdit(sessionId) {
        if (sessionId !== whichEdit) {
            console.log('hit')
            setWhichEdit(sessionId)
            setToggleEdit(true)
        } else {
            setToggleEdit(!toggleEdit);
        }
    }


    let mappedSessions = sessions.map((e, i) => {
        return (
            <div
                className='session-line'
                key={e.session_id}
                onClick={() => history.push(`/dashboard/${e.session_id}`)}>
                <h1>{i + 1}</h1>
                <h2
                >
                    {e.session_name}
                </h2>

                <form className='to-edit' onClick={e => e.stopPropagation()}>

                    <img className='in-to-edit' src={pencil} onClick={() => handleEdit(e.session_id)} />

                    <div>{whichEdit === e.session_id && toggleEdit === true ? (
                        <form className='edit-name-box'>
                            <input
                                className='in-to-edit'
                                onChange={(e) => { setEditSessionName(e.target.value, userID) }}
                                placeholder='new name' />
                            <button
                                className='in-to-edit'
                                onClick={(event) => {
                                    editSession(editSessionName, e.session_id)
                                }}
                            >edit name</button>
                        </form>)
                        :
                        null
                    }
                    </div>

                    <img src={garbageCan}
                        className='in-to-edit'
                        onClick={() => deleteSession(e.session_id)} />

                </form>
            </div>

        )
    })


    return (
        <div className='dashboard'>
            <h1 className='title'>Your Projects:</h1>
            <div>
                {mappedSessions}
            </div>
            <form className="create">
                Create New Project:
                <input placeholder="project name here" onChange={(e) => {
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