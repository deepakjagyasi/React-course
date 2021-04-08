import React, {Component} from 'react';

//Class Component
class Welcome extends Component {
    render () {
        return <h1>Welcome, {this.props.name} aka {this.props.heroName}</h1>
    }
}

export default Welcome