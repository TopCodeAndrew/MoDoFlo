import React from 'react';
import { useHistory } from 'react-router-dom';



export default function Footer(props) {
    console.log(`Footer Props:`, props)
    const history = useHistory()

    return (
        <div className="footer">
            <div>Contribute to Code!</div>
        </div>
    )
}

