import React, {useState, useEffect} from 'react'
import classes from './Menu.module.css';
import {NavLink, Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'



const Menu = (props) => {
    const [showLink, setShowLink] = useState(false)
    const [sideBar, setSideBar] = useState(false)


 useEffect(() => {
     if(window.innerWidth < 1000){
         setShowLink(true)
     }    
 }, [])
    useEffect(() => {
    const handlerResize = () =>{
        if(window.innerWidth < 1000){
            setShowLink(true)
            
        }else{
            setShowLink(false)
        }
    }
    window.addEventListener('resize', handlerResize)
    return () =>{
        window.addEventListener('resize', handlerResize)
    }
        
    }, [])
                
    return (
        <React.Fragment>
        <div className={classes['menu-container']}>
              {!showLink && <div className={classes.menu} >
                  
                  <NavLink style={({isActive})=> {return {color: isActive ? "white" : "burlywood"}}} className={classes.link} to="/">Home</NavLink>
                  <NavLink style={({isActive})=> {return {color: isActive ? "white" : "burlywood"}}}  className={classes.link} to="/student">Students</NavLink>
                  <NavLink style={({isActive})=> {return {color: isActive ? "white" : "burlywood"}}}  className={classes.link} to="/teachers">Teachers</NavLink>      
                  <NavLink style={({isActive})=> {return {color: isActive ? "white" : "burlywood"}}}  className={classes.link} to="/about">About Us</NavLink>
                  <NavLink style={({isActive})=> {return {color: isActive ? "white" : "burlywood"}}} className={classes.link} to="/contact">Contact Us</NavLink>          
              </div>}
              
              {showLink && <div className={classes.bars}>
                {!sideBar ? (<FaBars className={classes.bar} onClick={() => setSideBar(!sideBar)} />) : (<h1 className={classes.bar} onClick={()=> setSideBar(!sideBar)}>x</h1>)}
               </div>}   
        </div>
        {showLink && sideBar &&  <div onClick={()=> setSideBar(false)}>
         <div className={classes['side-bar']} >             
                  <Link className={classes.anchor} to="">Home</Link> 
                  <Link className={classes.anchor} to="/student">Students</Link>
                  <Link className={classes.anchor} to="/teachers">Teachers</Link>      
                  <Link className={classes.anchor} to="/about">About</Link>
                  <Link className={classes.anchor} to="/contact">Contact</Link>                  
        </div>
            </div>}
        </React.Fragment>
    )
}

export default Menu
