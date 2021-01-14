import React from 'react';

export default function Session(props) {
    const { session_id } = props.match.params;

    return (
        <div className="session">THIS IS THE session ELEMENT with props: {session_id} </div>
    )
}


