import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

const h2 = {
    color:"green",
    fontSize:"36px"
}

const h3 = {
    color:"red",
    fontSize:"36px"
}
export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Deepak'
        }
        console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;    
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }    
    
    render() {
        console.log('LifecycleA render method')
        return (
            <React.Fragment>
            <div style={this.props.data==="apply" ? h2 : h3}>LifeCycle A</div>
                
                <LifecycleB />
            </React.Fragment>
        )
    }
}

export default LifecycleA
