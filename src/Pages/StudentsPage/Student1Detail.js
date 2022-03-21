import React, {useContext, } from 'react'
import { Navigate } from 'react-router-dom'
import classes from './StudentDetail.module.css'
import logo from '../StudentsPage/Images/download.jfif'
import Contxt from '../../Context/AuthContex'

const Student1Detail = () => {
    const context = useContext(Contxt)
    const isLogin = context.user

    if(!isLogin){
        return <Navigate to="/"/>
    }

    const logoutHandler = async () =>{
        try{
       await context.signOutUser().then(res =>{
           console.log(context.user)
       })

        }catch(err){console.log(err)}
      
    }
    return (
        <React.Fragment>
        <h1>Welcome to our students</h1>
        <div className={classes.teachers}>
            <div className={classes.teacher1}>
                <img src={logo} alt="" />
                <p> Abdul Kamara</p>
            </div>
            <div className={classes.teacher2}>
            <img src={logo} alt="" />
                <p> Mohamed Sesay</p>

            </div>
            <div className={classes.teacher3}>
            <img src={logo} alt="" />
                <p> Joe Patrick</p>

            </div>
            <div className={classes.teacher4}>
            <img src={logo} alt={logo} />
                <p> Hassan Kargbo</p>
                
            </div>
            <div className={classes.teacher5}>
            <img src={logo} alt="" />
                <p>John Sesay</p>

            </div>
            <div className={classes.teacher6}>
            <img src={logo} alt={logo} />
                <p>Adikalie Dumbuya</p>

            </div>
            <div className={classes.teacher7}>
            <img src={logo} alt={logo} />
                <p>S O K</p>

            </div>
            <div className={classes.teacher8}>
            <img src={logo} alt={logo} />
                <p> Abdul Turay</p>

            </div>
            <div className={classes.teacher9}>
            <img src={logo} alt={logo} />
                <p> Abdul Turay</p>
                <p>Position: Teacher</p>

            </div>
            <div className={classes.teacher10}>
            <img src={logo} alt={logo} />
                <p> Abdul Turay</p>
                <p>Position: Teacher</p>

            </div>
            <div className={classes.teacher10}>
            <img src={logo} alt={logo} />
                <p>Aunty Kumba</p>
                <p>Position: Teacher</p>

            </div><div className={classes.teacher10}>
            <img src={logo} alt={logo} />
                <p>Aunty Ganda</p>
                <p>Position: Teacher</p>

            </div>
        </div>
        <div className={classes.logout}>
            <button onClick={logoutHandler} className={classes['logout-btn']}>Logout</button>
        </div>
    </React.Fragment>)
}

export default Student1Detail
