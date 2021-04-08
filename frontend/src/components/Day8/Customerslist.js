import React, { Component } from 'react'
import axios from 'axios'

class Customerslist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customers:[],
             searchTerm: ''
        }
    }
    
    componentDidMount(prevProps, prevState) {
        axios.get('http://localhost:5000/customers')
            .then((res)=>{
                this.setState({customers: res.data});
            }).catch((err)=>{
                console.log(err);
            })
    }

    deleteHandler = id => {
        axios.delete('http://localhost:5000/customers/'+id)
        .then(resp => {
            //window.location.reload();
            this.setState({
                customers: this.state.customers.filter((customer)=>{
                    if(!customer._id.toLowerCase().includes(id.toLowerCase())){
                        return customer;
                    }
                })
            })
            
        }) 
    }

    editHandler = id => {
        this.props.history.push('/edit-customer/'+id);
    }

    renderTableData() {
        return this.state.customers.map((customer, index) => {
           const { _id, first_name, last_name, gender } = customer //destructuring
           
           const mypro = ["0","1","2"]
           const [value0, value1, value2] = mypro; // Array destructuring

           if(this.state.searchTerm === "" || 
            first_name.toLowerCase().includes(
            this.state.searchTerm.toLowerCase())){
                return (
                    <tr key={_id}>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{gender}</td>
                        <td><button onClick={() => this.editHandler(_id)}>Edit</button></td>
                        <td><button onClick={() => this.deleteHandler(_id)}>Delete</button></td>
                    </tr>
                )
            }
           
        })
     }

    searchText(searchTerm) {
        this.setState({
            searchTerm : searchTerm
        })
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." 
                    onChange={(event) => this.searchText(event.target.value)}/>
                <table id='students'>

                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
        //{JSON.stringify(this.state.users)} 
    }
}

export default Customerslist

