import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             comments:''
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comments}`)
        event.preventDefault();
    }
    handleComments = event => {
        this.setState({
            comments: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' 
                        value = {this.state.userName} 
                        onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.handleComments}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
