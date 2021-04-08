import React from 'react'

const Hello = () => {
    //Use of JSX
    // return (
    //     <div id="functional-component" className="dummyClass">
    //         <h1>Functional Component!</h1>
    //     </div>
    // )

    //Without JSX
    return React.createElement('div', 
     { id: 'hello' , className: 'dummyClass' } , 
     React.createElement('h1', null, 'Functional component')
    )
}

export default Hello