import React from 'react'
import classes from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import Form from './Form';


const Contact = () => {
    return (
        <React.Fragment>
        <div className={classes['contact-banner']}>
            <h1>Get in touch with Tusakay</h1>
            <p>Contact us at Tusakay to know more about admission, your ward or child's performance, academics, activities, the welfare of the school and many other things</p>
        </div>

        <div className={classes['contact-section1']}>
        <div className={classes.call}>
        <FaPhoneAlt className={classes.icon} />
            <div className={classes.txt}>
            <p className={classes.txt1}>Call us directly on</p>
            <p className={classes.txt2}>+232 31 565446</p>
         </div>   
        </div>

        <div className={classes.address}>
            <p className={classes.txt1}>Visit us at</p>
            <p className={classes.txt2}>8 Motor Road Calaba Town, Freetown</p>
        </div>
        </div>
        <div className={classes.form}>
            <Form />
        </div>
        </React.Fragment>
    )
}

export default Contact
