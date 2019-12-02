import React from "react";
import LogHoc from "./hoc/LogHoc";

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

class Counter extends React.Component {
    render (){
        const { count, onCountUp, onCountDown, name } = this.props;
        return (
            <>
              <h2>Owner {name}</h2>
              <div style={style.mainDiv}>
                <button onClick={onCountDown} style={style.cildren}>-</button>
                <div style={style.cildren}>{count}</div>
                <button onClick={onCountUp} style={style.cildren}>+</button>
              </div>
            </>
        )
    }
}
export default LogHoc(Counter);
