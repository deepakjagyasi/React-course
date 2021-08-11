import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./customerTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const customerReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            loading : true
        }
        case FETCH_USERS_SUCCESS: return {
            loading : false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            loading : false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default customerReducer