import React, { Component } from 'react';

function logErrorToMyService(error, errorInfo) {
    console.log(error, errorInfo);
}

export class ErrorBoundary extends Component {

    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log(error);
      return { hasError: true, error: error.toString(),errorInfo: "nmcjkncdncvnvndfj nmscvkdvkmvdklm" };
    }
    
  
    componentDidCatch(error, errorInfo) {
        //this.setState({error: errorInfo.toString()});
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return <h1>Something went wrong. {this.state.error.toString()}</h1>;
      }
  
      return this.props.children; 
    }
  }