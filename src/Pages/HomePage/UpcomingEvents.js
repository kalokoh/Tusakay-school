import React from 'react'
import classes from './UpcomingEvents.module.css'

const UpcomingEvents = () => {
    return (
        <React.Fragment>
            <div className={classes['upcoming-events']}>
        <div className={classes['daily-event']}>
        <div className={classes['date-holder']}>
            <p>Second Term</p>
        </div>
        <div className={classes['event-holder']}>
            <p>Annual Sport Meet</p>
        </div>
        <div className={classes['time-holder']}>
            <p>12:00 pm</p>
        </div>
        <div className={classes['place-holder']}>
            
        </div>
        </div>
        </div> 
        </React.Fragment>
    )
}

export default UpcomingEvents
