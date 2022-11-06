import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>Hello</h1>
            <h2>time: {new Date().toLocalTimeString()} </h2>
        </div>
    );
}

export default Clock;