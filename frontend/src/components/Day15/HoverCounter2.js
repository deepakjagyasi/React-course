import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        //const {count} = this.state
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={()=> incrementCount(1)}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounter2
