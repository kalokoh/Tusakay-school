import React, {useState, useRef} from 'react'
import classes from './Form.module.css'
import emailjs from 'emailjs-com'

const Form = () =>{
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmited] = useState(false);

    const form = useRef();

        const nameValidity = enteredName.trim().length !== 0
        const emailValidity = enteredEmail.trim().length !== 0 && enteredEmail.includes('@')
        const messageValidity = enteredMessage.trim().length !== 0

        const isNameValid = !nameValidity && error
        const isEmailValid = !emailValidity && error
        const isMessageValid = !messageValidity && error


    const nameChangeHandler = (e) =>{
        setEnteredName(e.target.value)
    }
    const emailChangeHandler = (e) =>{
        setEnteredEmail(e.target.value)
    }
    const messageChangeHandler = (e) =>{
        setEnteredMessage(e.target.value)
    }

    

    const submitHandler = (e) =>{
        e.preventDefault()
        setError(true)

        if(!nameValidity){
            return
        }
        else if(!emailValidity){
            return
        }
        else if(!messageValidity){
            return
        }
        else{

            emailjs.sendForm('service_lqf9oyf', 'template_020jztk', form.current, 'user_6FGgIG8yPTHxuSvYq6ZiQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


            console.log('Name: ', enteredName)
        console.log('Email: ', enteredEmail)
        console.log('Message: ', enteredMessage)

        setEnteredName('')
        setEnteredEmail('')
        setEnteredMessage('')
        setError(false)
        }
        setIsSubmited(true)
        
    }


    return(
        <React.Fragment>
           {!isSubmitted && <form ref={form} className={classes.form} onSubmit={submitHandler}>
                <h2>Send a Message</h2>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter your name' name='to_name' id='name' value={enteredName} onChange={nameChangeHandler}  />
                {isNameValid && <p>please enter your name</p>}

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter your email' name='from_name' id='email' value={enteredEmail} onChange={emailChangeHandler}  />
                {isEmailValid && <p>please enter a valid email</p>}

                <label htmlFor="message">Send a message</label>
                <textarea name="message" placeholder='Message' id="message" cols="30" rows="10" value={enteredMessage} onChange={messageChangeHandler} ></textarea>
                {isMessageValid && <p>please enter some text</p>}

                <button type='submit'>Submit</button>
            </form>}
            {isSubmitted && <p className={classes.submitted}>Thank you for contacting us at Tusakay! Our team will get on to you shortly</p>}
        </React.Fragment>
    )
}
export default Form;