import React, { useRef } from 'react';
import classes from './Home.module.css'
import { AiOutlineArrowUp } from "react-icons/ai";
import UpcomingEvents from './UpcomingEvents';
import DailyNew from './DailyNew';
import Carlender from './Carlender';
import SecondBanner from './SecondBanner';
import Form from '../Contact Page/Form';

const Home = () => {
    const scrollRef = useRef(null)

   /* if(!isLoggedIn){
     return   <Navigate to='/teachers/login'/>
    }
    const logoutHandler = async () =>{
        try{
            await contxt.signOutUser()
        }catch (err) {}
    } */
    const scrollToTop = () =>{
    return    window.scrollTo({top: scrollRef.current.offsetTop, behavior: 'smooth'})
    }
    return (
         <React.Fragment >    
        <div className={classes.banner} ref={scrollRef}>
            <p>Welcome to tusakay pre and high school</p> 
        </div>
        <div className={classes.banner2}>
            <SecondBanner />
        </div>
        
        <div className={classes.container}>
        <Carlender className={classes.calendar} />
        <div className={classes['event-container']}>
        <h1 className={classes.events}>Upcoming Events</h1>
       <UpcomingEvents />
       <UpcomingEvents />
       <UpcomingEvents />
        </div>
        
        </div>
        
       
       <DailyNew />
       <Form />
        <AiOutlineArrowUp onClick={scrollToTop} className={classes.scroll}/>
        </React.Fragment>
    )
}
export default Home
