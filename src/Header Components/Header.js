import classes from './Header.module.css'
import React from 'react';
import Menu from './Menu'

const Header = () => {
         
    return (
        <React.Fragment>
                <div className={ classes['header-container']}>
                    <div>
                    <p className={classes.heading}>TUSAKAY PRE AND HIGH SCHOOL</p>
                    <p className={classes.motto}>Serving Humanity</p>
                    </div>
                    <div>
                    <Menu />
                </div> 
                </div>

            


            
        </React.Fragment>
    )
}

export default Header
