import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function Block(props) {
    console.log(props)
    let history = useHistory()
    const { session_id } = props.match.params;


    const [counter, setCounter] = useState(1500);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="timer">
            <div className='timer-box'>
                <div className="time-left">Time left to Work:</div>
                <div className='counter'>
                    <p>
                        {(Math.floor(counter / 60)) < 10 ? 0 : null}{Math.floor(counter / 60)} : {(counter % 60) < 10 ? 0 : null}{counter % 60}
                    </p>
                </div>
            </div>
            <button onClick={() => history.push(`/dashboard/${session_id}`)}>Back to Session</button>
        </div>
    );
}






