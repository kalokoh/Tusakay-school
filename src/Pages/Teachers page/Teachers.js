import React from 'react'
import Login from './Login'
import classes from './Teacher.module.css'


const Teachers = () => {
    return (
        <React.Fragment>
            <h1 className={classes.title}>Teacher's Login</h1>
            <Login />
        </React.Fragment>
    )
}

export default Teachers
