import React from "react";

const LogHoc =  Component => {
    class NewLogHoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        // static getDerivedStateFromProps(nextProps, state) {
        //     console.log('myprops',nextProps);
        //     console.log('1',Component.displayName);
        //     console.log('2',Component.name);
        // }
        onCountUp = () => {
             this.setState(state => {
                 return {
                     count: state.count + 1
                }
             });
             console.log('state', this.state);
             
        }
        onCountDown = () => {
            this.setState(state => {
                return {
                    count: state.count - 1
               }
            });            console.log('state', this.state);
            
       }

        render () {
            return <Component 
            name='Gurgen' 
            count={this.state.count} 
            onCountUp={this.onCountUp}
            onCountDown={this.onCountDown}
             {...this.props}/>
        }
    }

    //NewLogHoc.displayName= `LogHoc(${Component.displayName || Component.name || 'Component'})`;
    return NewLogHoc;

}

export default LogHoc;
