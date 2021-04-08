import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        console.log("UseEffect - updating document title")
        document.title = `You clicked ${count} times`

        return () => {
            //Component cleanup code - removing event handlers
            console.log('Component unmount listener')
        }
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value) } />
            <button onClick={() => setCount(count+1)}>Click {count} times</button>        
        </div>
    )
}

export default HookCounterOne
