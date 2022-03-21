import React, {useRef, useState, useContext} from 'react'
import classes from './SignUp.module.css';
import {Link, useNavigate} from 'react-router-dom'
import Contxt from '../../Context/AuthContex'


const SignUp = () => {

    const emailInput = useRef('')
    const passwordInput = useRef('')
    const [error, setError] = useState()
    const contxt = useContext(Contxt)
    const navigate = useNavigate()

    const submitHandler = async (e) =>{
        e.preventDefault()
        setError('')
        const enteredEmail = emailInput.current.value
        const enteredpassword = passwordInput.current.value

        try{
            await contxt.signUpUser(enteredEmail, enteredpassword)
            navigate('/')
        }catch (err) {
            setError(err.message)
        }
    }


    return (
        <React.Fragment>
            <h1>Sign up</h1>
            <form onSubmit={submitHandler} action="" className={classes.form}>
                
                <label htmlFor="email">Email</label>
                <input ref={emailInput} type="email" name='email' />
                <label htmlFor="password">Password</label>
                <input ref={passwordInput} type="password" name='password' />
                <button type='submit'>Sign Up</button>
            </form>
            {error && alert(error)}
            <div className={classes['have-account']}>
                <p>Already have an account? <Link to='/teachers/login'>Sign In</Link></p>
            </div>
        </React.Fragment>
    )
}

export default SignUp
