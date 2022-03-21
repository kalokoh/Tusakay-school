import React, {useRef, useState, useContext} from 'react'
import Contxt from '../../Context/AuthContex'
import {Link,useNavigate} from 'react-router-dom'
import classes from './StudentLogin.module.css'
import GoogleButton from 'react-google-button'


const Login = () => {
    const emailInput = useRef('')
    const passwordInput = useRef('')
    const [error, setError] = useState()
    const contxt = useContext(Contxt)
    const navigate = useNavigate()

    const submitHandler = async(e) =>{
        e.preventDefault()
        setError('')
        const enteredEmail = emailInput.current.value
        const enteredpassword = passwordInput.current.value

        try{
            await contxt.signInUser(enteredEmail, enteredpassword)
            navigate('/students/login/details')
            console.log(contxt.user.accessToken)
        }catch (err) {
            setError(err.message)
        }
    }

    const googleSignInHandler = async (e) =>{
        e.preventDefault()

        try{
           await contxt.googleSignIn();
           navigate('/students/login/details')
            } catch (err) {
                setError(err.message)
        }
    }

    
    return (
        <div>
            
            <form className={classes.form} action="" onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input ref={emailInput} type="email" name='email' />
                <label htmlFor="password">Password</label>
                <input ref={passwordInput} type="password" name='password' />
                <button type='submit'>Login</button>
                <Link to='/teachers/login/reset' className={classes.reset}>
                    <p className={classes['forgot-password']}>forgot password?</p>
                </Link>
            </form>
            <div className={classes.GoogleButton}>
            <GoogleButton onClick={googleSignInHandler} />

            </div>

            {error && alert(error)}
        </div>
    )
}

export default Login
