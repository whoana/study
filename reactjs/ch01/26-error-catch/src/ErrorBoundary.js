import * as Sentry from '@sentry/browser'
import React, { Component } from "react";

class ErrorBoundary extends Component{

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('에러가 발생했습니다.', {error, errorInfo})
        this.setState({error: true})

        if(process.env.NODE_ENV === 'production'){
            Sentry.captureException(error, {extra: errorInfo})
        }
    }

    render(){
        if(this.state.error) {
            return (
                <h1>에러발생</h1>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary