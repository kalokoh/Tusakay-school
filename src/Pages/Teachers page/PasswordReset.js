import React, {useContext, useState} from 'react'
import { useToasts } from 'react-toast-notifications';
import Contxt from '../../Context/AuthContex'
import classes from './PasswordReset.module.css'

const PasswordReset = () => {
    const [email, setEmail] = useState('')
    const context = useContext(Contxt)
    const { addToast } = useToasts();

    const onChangeEmailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const submitHandler = async (e) =>{
        e.preventDefault()

        try{
            await context.passwordReset(email)
            addToast('sent successfully', { appearance: 'success' });
        }catch(err) {addToast(err.message, { appearance: 'error' });}
    }
  
    return (
        <React.Fragment>
            <div>
                <h1 className={classes.title}>Password Reset</h1>
                <form className={classes.form} action="" onSubmit={submitHandler}>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={onChangeEmailHandler} />
                    <button type='submit'>Submit Email</button>
                </form>
            </div>
         </React.Fragment>
    )
}

export default PasswordReset
