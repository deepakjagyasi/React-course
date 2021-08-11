import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './customerTypes'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        return axios.get('http://localhost:5000/customers')
            .then((res)=>{
                //this.setState({customers: res.data});
                dispatch(fetchUsersSuccess(res.data))
            }).catch((err)=>{
                //console.log(err);
                dispatch(fetchUsersFailure(err.nessage))
            })
    }
}