import React from 'react'
import classes from './DailyNews.module.css'


const DailyNew = () => {
    



    return (
        <React.Fragment>
        <h1 className={classes.ann}>Announcements</h1>
        <div className={classes.news}>
            <div className={classes['first-ann']}>
                <h1>01</h1>
                <p>All students should inform their parents about our CTA meeting on the 15 January 2022. Many relevant issues will be discussed and it is time your parent(s) are present for that meeting. </p>
            </div>
            <div className={classes['first-ann']}>
                <h1>02</h1>
                <p>The administration together with the teachers have finally agreed on issusing report cards on the 15 January 2022 just afetr the CTA metting. Note! No result will be given to the students but the parents  </p>
            </div>
            <div className={classes['first-ann']}>
                <h1>03</h1>
                <p>During the CTA meeting conducted on the 15 January 2022, the parents and the school agreed on having both interannual sport meet and a price giving ceremony for second term</p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default DailyNew
