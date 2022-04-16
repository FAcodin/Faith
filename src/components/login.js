import App from '../App';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import { signIn } from '../services/auth';
import { data } from 'autoprefixer';
import { loginvalidationSchema } from '../utils/formutils';
import logo from "../images/jhb.jpg"

function Login() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //call firbase to signup 
      signIn(values, onSuccess, onFailure);
    },
    validationSchema: loginvalidationSchema,
  })
  const SignUpHandler = () => {
    navigate("/SignUp")
  }
  const ResetPasswordHandler = () => {
    navigate("/ResetPassword")
  }
  const AboutHandler = () => {
    navigate("/About")
  }
  const onSuccess = () => {
    navigate("/home")
  }
  const loginHandler = () => {
    navigate("/login")
  }
  const onFailure = (message) => {
    setServerError(message);
    console.log(message, "star star star")
  }

  //this is where you submit to the server/backend



  return (
    <div className="bg-[url('./images/kid.jpg')] bg-cover h-screen">
      <div className=' grid grid rows-3 w-full mx-auto text-center font-bold text xl'>
        <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
          <img className="mr-[800px]" src={logo} alt="jhblogo" width="200" height="200"></img>
          <button onClick={ResetPasswordHandler} className=" bg-red-200 px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >Forgot Password</button>
          <button onClick={SignUpHandler} className=" bg-red-200 px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >Sign-up</button>
          <button onClick={AboutHandler} className=" bg-red-200 px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >About</button>

        </ul>
        {/* <div className='w-[600px] h-[500px] absolute top-[200px] left-450px] p-[100px] bg-gradient-to-r from-red-500 to red-500-op'</div> */}
        <h2 className="text-white text-black font-bold text-4xl">WELCOME</h2>
        <div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-white"> Email </label>
            <input className=" border border-4 border-black-400 m-4 mb-8 md:w-85 h-20  shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="email" value={formik.values.email} onChange={formik.handleChange} type="text" name="email" placeholder="Enter Email" />
            {formik.errors.email &&
              <div className="text-red-200 text xs"> {formik.errors.email} </div>}
            <div>{serverError}</div>
          </div>
          <div>
            <label className="text-white "> Password </label>
            <input className=" border border-4 border-black-400 m-4 mb-8 md:w-85 h-20  shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center "  id="password" value={formik.values.password} onChange={formik.handleChange} type="password" name="password" placeholder="Enter Password" />
            {formik.errors.password &&
              <div className="text-red-200 text xs"> {formik.errors.password} </div>}
          </div>

          <div className="bg-red-400 text-black font-bold text-xl"></div>
          <button type="submit" className="bg-red-200 px-28 text-black font-bold text-xl">Submit</button>
          <div className="text-black font-bold text-xl"></div>
          <br></br>
        </form>
        <footer className="flex justify-start ">
          <div className="text-red-200">
          Contact us
          <div className="text-white">(04) 298 398 2092</div>
          <div className="text-white">info.fastestment@gmall.com</div>
          </div>
        </footer>

      </div >
    </div>
  )
}

export default Login;