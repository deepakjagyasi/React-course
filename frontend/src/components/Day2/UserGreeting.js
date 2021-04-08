import React, { Component } from 'react'

//Conditional Rendering
class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    clickHandler(){
        console.log('Welcome, user Clicked the button');
    }
    render() {      
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Deepak</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return {message}
        
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Deepak</div>
        // } else {
        //     return (
        //         <div>
        //             <button onClick={this.clickHandler}>Click Me</button>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

        return (
                this.state.isLoggedIn ? 
                <div>Welcome Deepak</div> :
                <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
