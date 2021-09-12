import React, {useState} from 'react'
import {connect } from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e=> setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}> Buy {number} Cake </button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    //const itemState = ownProps.cake ? state.cake.numOfCakes : state.ice
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
