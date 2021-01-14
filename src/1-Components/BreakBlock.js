import React from 'react'

export default function BreakBlock(props) {
    const { session_id, block_id } = props.match.params;


    const [counter, setCounter] = React.useState(300);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);


    return (
        <div className="timer">
            <div>Counter: {counter}</div>
            <div>{Math.floor(counter / 60)} : {(counter % 60) < 10 ? 0 : null}{counter % 60}</div>
            <div>
                session id:{session_id},
                block id: {block_id},
            </div>
        </div>
    );
}






