import React from "react";

function logHoc (Component) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log(this.props);
            console.log(nextProps);
        }

        render () {
            return <Component {...this.props}/>
        }
    }

}

export default logHoc;
