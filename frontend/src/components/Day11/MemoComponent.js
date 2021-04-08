import React from 'react'

function MemoComponent({name}) {
    console.log("Rendering Memo component")
    return (
        <div>
            SEE HERE - {name}
        </div>
    )
}

export default React.memo(MemoComponent)
