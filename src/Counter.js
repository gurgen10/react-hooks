import React from "react";
import logHoc from "./hoc/log-hoc";

const style = {
    mainDiv: {
        display: 'flex',
        margin: '1rem auto',
        justifyContent: 'center',
        color: 'pink'
    },
    cildren: {
        marginRight: '.3rem'
    }
}

function Counter ({ count, onCountUp, onCountDown}) {
    return (
        <div style={style.mainDiv}>
            <button onClick={onCountDown} style={style.cildren}>-</button>
            <div style={style.cildren}>{count}</div>
            <button style={style.cildren} onClick={onCountUp}>+</button>
        </div>
    )
}
export default logHoc(Counter);
