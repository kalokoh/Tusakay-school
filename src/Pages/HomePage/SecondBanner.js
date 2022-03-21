import React from "react";
import img1 from "../StudentsPage/Images/IMG-20211108-WA0023.jpg";
import img2 from "../StudentsPage/Images/IMG-20211108-WA0027.jpg";
import img3 from "../StudentsPage/Images/IMG-20211108-WA0028.jpg";
import img4 from "../StudentsPage/Images/IMG-20211108-WA0029.jpg";
import img5 from "../StudentsPage/Images/IMG-20211108-WA0030.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import classes from "./SecondBanner.module.css";

const SecondBanner = () => {
  return (
    <React.Fragment>
      <div className={classes["second-banner"]}>
        <div className={classes["description-container"]}>
          <p className={classes.first}>Here is what we do at Tusakay</p>
          <p className={classes.second}>
            {" "}
            We prepare students to be efficient leaders in the future with our
            outstanding and hardwworking teachers who are committed to decipher
            the most important concepts that will help our students in the
            future.
          </p>
        </div>
      </div>

      <div className={classes.slider}>
        <div className={classes.images}>
          <img src={img1} alt="Tusakay" />
          <img src={img2} alt="Tusakay" />
          <img src={img3} alt="Tusakay" />
          <img src={img4} alt="Tusakay" />
          <img src={img5} alt="Tusakay" />
        </div>
      </div>
      <div className={classes["txt-container"]}>
        <p>Enroll your ward or child today!</p>
      </div>
      <div className={classes.call}>
        <FaPhoneAlt className={classes.icon} />
        <div className={classes.txt}>
          <p className={classes.txt1}>Call us directly on</p>
          <p className={classes.txt2}>+232 31 565446</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondBanner;
