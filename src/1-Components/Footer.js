import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';





export default function Footer(props) {
    const history = useHistory()

    return (
        <div className="footer">
            <Link
                className='contribute'
                to='/donate'>Contribute to MODOFLO!</Link>
        </div>
    )
}

