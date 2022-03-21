import React, {useState} from 'react'
import classes from './Carlender.module.css'
import 'react-calendar/dist/Calendar.css';
import Calender from 'react-calendar';

const Carlender = () => {
    const [date, setDate] = useState(new Date())

    const onChangeHandler = (date) =>{
        setDate(date)
    }

    return (
        <React.Fragment>
            <div className={classes.calendar}>
            <h2>School Calendar</h2>
            <Calender value={date} onChange={onChangeHandler} showWeekNumbers  />
            <p className={classes.date}>{date.toLocaleString('en-US', {day:'2-digit', month:'short', year:'numeric'})}</p>
            </div>
            
            
        </React.Fragment>
    )
}

export default Carlender
