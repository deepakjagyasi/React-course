import React from 'react'
import {buyIceCream} from '../redux'
import { useSelector, useDispatch } from 'react-redux'

function IceCreamContainer(props) {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}> Buy IceCream </button>
        </div>
    )
}

export default IceCreamContainer
