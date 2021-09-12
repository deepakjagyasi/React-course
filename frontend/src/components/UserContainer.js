import React, { Component, useEffect } from 'react'

import { connect } from 'react-redux' 
import { fetchUsers } from '../redux'

function UserContainer(props) {
    useEffect(() => {
        props.fetchUsers()
    }, [])
    return props.userData.loading? (
        <h2>Loading...</h2>
    ) : props.userData.error ? (
        <h2>{props.userData.error}</h2>
    ) : (
        <div>
            <h2>User</h2>
            <div>
                {
                    props.userData && props.userData.users && props.userData.users.map(user => <p key={user._id}>{user.first_name}</p>)
                }
            </div>
        </div>
    )
    
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
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
