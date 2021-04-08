import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }

        this.onIncrement = this.onIncrement.bind(this)
    }
    onIncrement() {
        // this.state.count = this.state.count + 1;      
        this.setState({
            count : this.state.count + 1
        },
        () => {
            console.log('Callback Value', this.state.count)
        })

        // this.setState(prevState  => ({
        //     count : prevState.count + 1
        // }),
        // () => {
        //     console.log('Callback Value', this.state.count)
        // })

        console.log(this.state.count)
    }
    incrementFive() {
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
    }  
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={this.onIncrement}>Increment</button>
            </div>
        )
    }
}

export default Counter
