import React, {Component} from 'react';

//EVENT HANDLING
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: " Welcome Visitor"
        }
    }
    changeMessage () {
        this.setState({
            message:"Thank you for Subscribing"
        })
    }
    render () {
        return (
            <div>
                <h1>Hi, {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message