import React from 'react'
import StudentLogin from '../StudentsPage/StudentLogin'
import  classes from './Student.module.css'
const Students = () => {
  
    return (
        <React.Fragment>
            <div>
                <h1 className={classes.title}>Students Login</h1>
                < StudentLogin />
            </div>
         </React.Fragment>
    )
}

export default Students
