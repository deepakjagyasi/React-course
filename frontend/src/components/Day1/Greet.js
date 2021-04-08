import React from 'react'

//Functional Component
// function Greet(props){
//     return <h1>Hello, Good Morning! This is a Functional Component</h1>
// }

//ES6 Arrow function syntax - Functional Component
const Greet = (props) => <h1>Hello, Good Morning! This is a Functional Component {props.name}</h1>

// const Greet = (props) => {
//     console.log(props);
//     props.name = 'Deepak';
//     return (
//         <div>
//             <h1>Hello, Good Morning {props.name} aka {props.heroName}!</h1>
//             {props.children}
//         </div>
//     )
// }
export default Greet