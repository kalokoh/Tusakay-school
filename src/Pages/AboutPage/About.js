import React, {useRef} from 'react'
import classes from './About.module.css'
import { AiOutlineArrowUp } from "react-icons/ai";
import Form from '../Contact Page/Form';

const About = () => {
    const missionRef = useRef(null)
    const historyRef = useRef(null)
    const descriptionRef = useRef(null)

    const scrollToMission = () =>{
        return window.scrollTo({top: missionRef.current.offsetTop, behavior: 'smooth'})
    }
    const scrollToHistory = () =>{
        return window.scrollTo({top: historyRef.current.offsetTop, behavior: 'smooth'})
    }
    const scrollToDescription = () =>{
        return window.scrollTo({top: descriptionRef.current.offsetTop, behavior: 'smooth'})
    }
    const scrollToTop = () =>{
        return window.scrollTo({top: 0, behavior: 'smooth'})
    }


    return (
        <React.Fragment>
            <div className={classes['contact-banner']}>
            <h1>About Tusakay</h1>
            <p>Know more about Tusakay Pre and High school. <span onClick={scrollToMission}>Our mission</span>, aims and objectives, <span onClick={scrollToHistory}>how we started </span>  and many other vital information about the school including <span onClick={scrollToDescription}>who we are</span>. </p>
            </div>
            <div className={classes.history} ref={historyRef}>
                <h1>How it started</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quisquam aliquam deserunt, beatae perspiciatis ab? Exercitationem, vel aut sequi eaque esse porro eveniet saepe, totam tempora minus voluptatum iste dolorem illo vitae mollitia libero nobis consequuntur itaque in suscipit accusantium sed dicta eum ut. At quisquam corporis atque libero aliquid.</p>
            </div>

            <div className={classes.description} ref={descriptionRef}>
                <h1>Who we are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore doloribus debitis quibusdam expedita dolores magni eligendi perferendis officiis quo alias incidunt esse, voluptas beatae qui nisi, corrupti nulla error recusandae, sint aperiam molestiae unde! Voluptas expedita eius nobis sit id eum repudiandae quo cumque, porro placeat! Impedit, at accusantium.</p>
            </div>

            <div ref={missionRef} className={classes.mission}>
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore doloribus debitis quibusdam expedita dolores magni eligendi perferendis officiis quo alias incidunt esse, voluptas beatae qui nisi, corrupti nulla error recusandae, sint aperiam molestiae unde! Voluptas expedita eius nobis sit id eum repudiandae quo cumque, porro placeat! Impedit, at accusantium.</p>
            </div>
            <div>
                <Form />
            </div>
            <div>
        <AiOutlineArrowUp onClick={scrollToTop} className={classes.scroll}/>

            </div>
        </React.Fragment>
    )
}

export default About
