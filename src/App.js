import React from "react";
import { Route, Routes,  } from "react-router-dom";
import Footer from "./FooterComponent/Footer";
import Header from "./Header Components/Header";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/Contact Page/Contact";
import Home from "./Pages/HomePage/Home";
import Students from "./Pages/StudentsPage/Students";
import Teachers from './Pages/Teachers page/Teachers'
import classes from './App.module.css'
import Login from "./Pages/Teachers page/Login";
import PasswordReset from "./Pages/Teachers page/PasswordReset";
import {ToastProvider} from 'react-toast-notifications'
import TeacherDetail from './Pages/Teachers page/TeacherDetail'
import StudentDetail from './Pages/StudentsPage/Student1Detail'
import {Helmet} from 'react-helmet'


function App() { 
  return (
    
    <div className={classes.body}>
      <Helmet>
        <title>Tusakay School</title>
      </Helmet>
       
     <Header />  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Students />} /> 
      <Route path="/teachers" element={<Teachers />}  /> 
      <Route path="/contact" element={<Contact/>}  /> 
      <Route path="/about" element={<About />}  /> 
      <Route path='/teachers/login' element={<Login />} />
      <Route path='/teachers/login/reset' element={<ToastProvider>
        <PasswordReset />
        </ToastProvider>} />
        <Route path='/tearcers/login/details' element={<TeacherDetail/>}/>
        <Route path='/students/login/details' element={<StudentDetail/>}/>
      </Routes>
     
       <div className={classes.footer}>
       <Footer />
       </div>
   
    </div>
  );
}

export default App;
