import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    
        this.state = {
             first_name:'',
             last_name:'',
             gender:''
        }
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    changeHandler = e => {
        alert(this.inputRef.current.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/customers/', this.state)
        .then(resp => {
            this.props.history.push('/')
            console.log(resp);
        }) 
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        onChange={this.changeHandler}
                        value={this.state.first_name}
                        ref = {this.inputRef}
                    ></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        onChange={this.changeHandler}
                        value={this.state.last_name}
                    ></input>
                </div>
                <div>
                    <label>Gender</label>
                    <input
                        type="text"
                        name="gender"
                        onChange={this.changeHandler}
                        value={this.state.gender}
                    ></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
