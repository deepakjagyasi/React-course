import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Deepak'
        }
        console.log('LifecycleB Constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null;    
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    
    render() {
        console.log('LifecycleB render method')
        return (
            <React.Fragment>
                LifeCycle B
            </React.Fragment>
        )
    }
}

export default LifecycleB
