import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const history = useHistory()

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function sendUserInfo(e) {
        e.preventDefault();
        axios
            .post('/api/login', {
                email: usernameInput,
                password: passwordInput
            })
            .then((res) => {
                console.log(res)
                history.push('/dashboard')
            }).catch(err => console.log(err))

    }

    return (
        <div className='auth'>
            <div className='container'>
                <p className="title">Let's get started...</p>
                <form className='inputs-container'>
                    <div className='inputs'>
                        <p>Username:</p>
                        <input
                            className='box'
                            onChange={(e) => setUsernameInput(e.target.value)}
                            placeholder='...' />
                    </div>
                    <div className='inputs'>
                        <p>Password:</p>
                        <input
                            className='box'
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder='...' />
                    </div>
                </form>
                <button
                    onClick={(e) => sendUserInfo(e)}
                    className="go">
                    Go!
                </button>
            </div>
        </div>
    )
}