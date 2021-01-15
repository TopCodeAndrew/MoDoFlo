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
            <button onClick={() => logoutUser()}>Logout</button>
        </div>
    )
}