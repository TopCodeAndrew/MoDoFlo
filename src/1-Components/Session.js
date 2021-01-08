import React from 'react';
// import '../2-Styling/7-Session/_session.scss'

export default function Session(props) {

    return (
        <div className="session">THIS IS THE session ELEMENT with props: {props.match.params.session_id} </div>
    )
}


