import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'

class ComponentD extends Component {
    //static contextType = UserContext
    render() {
        return (
            <div>
                Component D Context - {this.context}
                <ComponentE></ComponentE>
            </div>
        )
    }
}

ComponentD.contextType = UserContext

export default ComponentD
