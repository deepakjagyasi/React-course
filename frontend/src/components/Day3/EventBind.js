import React, { Component } from 'react'

//EVENT BINDING
export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: "Clicked!"
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.clickHandler}>ChangeMessage</button>
                
                
            </div>
        )
        //<button onClick={this.clickHandler.bind(this)}>ChangeMessage</button>
        //<button onClick={() => this.clickHandler()}>ChangeMessage</button>
        //<button onClick={this.clickHandler}>ChangeMessage</button>
    }
}

export default EventBind
