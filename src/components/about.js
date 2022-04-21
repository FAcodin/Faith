import React from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { about } from '../services/auth';

function About() {
    // const navigate = useNavigate()
    // const [serverError, setServerError] = useState("")
    // const formik = useFormik({
    // },

    // const loginHandler = () => {
    //     navigate("/login")
    // }

    return (
        <div className='h-screen grid grid rows-3 w-full mx-auto text-center bg-red-900 font-bold text-4xl'>
             {/* <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
          <button onClick={loginHandler} className=" bg-white px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >LogIn</button>
        </ul> */}
            <h1>About</h1>
            <div> Welcome to fastestment! This is a app to help you and many others get into coding fast and simple. In this app, we will be helping you learn coding online by showing you videos, questions, and giving you assesments. We are so glad you want to learn coding and promise you it will be worth your time.</div>
        </div>

    )
}
export default About;