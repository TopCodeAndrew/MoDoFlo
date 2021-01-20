import React from 'react';
import { useHistory } from 'react-router-dom';




export default function Footer(props) {
    const history = useHistory()

    return (
        <div className="footer">
            <div
                className='contribute'
                onClick={() => { history.push('/donate') }}>Contribute to MODOFLO!</div>
        </div>
    )
}

