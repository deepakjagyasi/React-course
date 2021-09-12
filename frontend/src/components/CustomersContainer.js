import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { fetchUsers } from '../redux'

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    
    render() {
        return this.props.userData.loading? (
            <h2>Loading...</h2>
        ) : this.props.userData.error ? (
            <h2>{this.props.userData.error}</h2>
        ) : (
            <div>
                <h2>User</h2>
                <div>
                    {
                        this.props.userData && this.props.userData.users && this.props.userData.users.map(user => <p key={user._id}>{user.first_name}</p>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.customer
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer)
