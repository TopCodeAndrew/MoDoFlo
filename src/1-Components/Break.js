import React, { useState } from 'react'

function App() {
    const [counter, setCounter] = React.useState(60);

    // Second Attempts
    React.useEffect(() => {
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    }, []);

    return (
        <div className="App">
            <div>Countdown: {counter}</div>
        </div>
    );
}