import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Shop(props) {
    return (
        <div style={heading}>
            Shop Page - 
            {JSON.stringify(props.history.location)}
        </div>
    )
}

export default Shop
