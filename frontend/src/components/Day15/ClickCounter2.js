import React, { Component } from 'react'

class ClickCounter2 extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button onClick={()=> incrementCount(5)}>Clicked {count} times</button>
    }
}

export default ClickCounter2
