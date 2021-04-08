import React from 'react'

// function ForwardRefInput(props) {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const ForwardRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )  
}) 

export default ForwardRefInput
