import React, {useContext} from 'react'
import{UserContext, CourseContext} from '../../App'

function ComponentB() {
    const user = useContext(UserContext)
    const course = useContext(CourseContext)

    return (
        <div>
            {user} - {course}
        </div>
    )
}

export default ComponentB
