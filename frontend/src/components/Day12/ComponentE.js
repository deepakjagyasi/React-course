import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <div>Hello from Component E - {userName}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE
