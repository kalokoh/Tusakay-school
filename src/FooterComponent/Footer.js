import React from 'react'
import classes from './Footer.module.css'
import {NavLink} from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <React.Fragment >
            <div className={classes['footer-container']}>
            <div className={classes.footer}>
            <section className={classes['first-section']}>
            <p className={classes.heading}>TUSAKAY PRE AND HIGH SCHOOL</p>
                <p className={classes.motto}>Serving Humanity</p>
            </section>
            
            <section className={classes['second-section']}>
                
            <a  className={classes.social} href='https://oxfordhigh.oxfordschools.org/'><AiFillFacebook /></a>
            <a  className={classes.social} href='/#'><AiFillTwitterCircle /></a>
            <a className={classes.social} href='/#'>< AiOutlineInstagram /></a>
            <a className={classes.social} href=" https://wa.me/qr/EFN7P5TUVJC2D1"  ><AiOutlineWhatsApp /></a>
                
                
                
              </section>

              <section className={classes['third-section']}>
              <NavLink  className={classes.link} to="">Home</NavLink>
                  <NavLink  className={classes.link} to="/student">Students</NavLink>
                  <NavLink  className={classes.link} to="/teachers">Teachers</NavLink>      
                  <NavLink  className={classes.link} to="/about">About</NavLink>
                  <NavLink  className={classes.link} to="/contact">Contact</NavLink>          
            </section>
            
        </div>
        <p className={classes.copyright}> copyright&copy;Tusakay 2022</p>
        
            </div>
        
        </React.Fragment>

    )
}

export default Footer
