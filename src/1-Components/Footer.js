import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Footer() {
    const history = useHistory()
    function logoutUser() {
        axios
            .delete('/api/logout')
            .then(() => {
                history.push(`/`)
            })
    }

    return (
        <div className="footer">
            <div>Contribute to Code!</div>
            <button onClick={() => logoutUser()}>Logout</button>
        </div>
    )
}