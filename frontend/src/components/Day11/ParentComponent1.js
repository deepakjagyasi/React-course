import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComponent1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'Deepak'
        }
    }   
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Deepak'
            })
        }, 2000)
    }
    render() {
        console.log("Parent Component")
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name} />
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComponent1
