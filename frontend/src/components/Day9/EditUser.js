import React, { Component } from 'react'
import axios from 'axios'

export class EditUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name:'',
             last_name:'',
             gender:''
        }
    }
    componentDidMount(prevProps, prevState) {
        axios.get('http://localhost:5000/customers/'+this.props.match.params.id)
            .then((res)=>{
                this.setState({
                    first_name:res.data.first_name,
                    last_name:res.data.last_name,
                    gender:res.data.gender
                });
            }).catch((err)=>{
                console.log(err);
            })
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault();
        axios.patch('http://localhost:5000/customers/'+this.props.match.params.id, this.state)
        .then(resp => {
            console.log(resp);
            this.props.history.push('/');
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

export default EditUser
