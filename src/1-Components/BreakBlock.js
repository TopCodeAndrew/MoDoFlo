import React from 'react'

export default function BreakBlock(props) {
    const { session_id, block_id, block_type_id } = props.match.params;


    const [counter, setCounter] = React.useState(300);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className="App">
            <div>Countdown: {counter}</div>
            <div>
                session id:{session_id},
                block id: {block_id},
                block type id: {block_type_id}
            </div>
        </div>
    );
}






