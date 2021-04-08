import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post, setPost] = useState([])
    const[id, setId] = useState(1)
    const[idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(resp => {
            console.log(resp)
            setPost(resp.data)
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value={id} onChange={ e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <p>{post.title}</p>
            {/* <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>  */}
        </div>
    )
}

export default DataFetching
