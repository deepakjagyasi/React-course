import React from 'react'
import './About.css'
import styles from './About.module.css'

function About(props) {
    
    return (
        <div>
            <h1 className={`primary ${styles.fontxl}`}>About Page</h1>
            <button onClick ={() => {
                props.history.push("/shop", { userId: 21, name: "Deepak", age: 21 })
            }}>Navigate to Shop with params</button>
        </div>
    )
}

export default About
