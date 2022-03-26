import App from '../App';
import logo from '../logo.svg';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useFormik } from "formik";
import { signIn } from '../services/auth';
import { data } from 'autoprefixer';
import { loginvalidationSchema } from '../utils/formutils';

function Login() {
  const navigate = useNavigate()
  const[serverError,setServerError] =useState("")
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      //call firbase to signup 
      signIn(values,onSuccess,onFailure);
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
  const onSuccess =() => {
    //callback onSuccess
  }
  const onFailure =(message) => {
    setServerError(message);
  }

      //this is where you submit to the server/backend



  return (
    <div className='h-screen grid grid rows-3 w-full mx-auto text-center bg-red-900 font-bold text xl'>
      {/* <div className='w-[600px] h-[500px] absolute top-[200px] left-450px] p-[100px] bg-gradient-to-r from-red-500 to red-500-op'</div> */}
      <div className="bg-red-900 text-black font-bold text-xl">
        <h2>LogIn</h2>
      </div>
      <form>
        <div>
          <label> Email </label>
          <input id="email" value={formik.values.email} onChange={formik.handleChange} type="text" name="email" placeholder="Enter Email" className="m-4" />
          {formik.errors.email &&
            <div className="text-red-200 text xs"> {formik.errors.email} </div>}
            <div>{serverError}</div>
        </div>
        <div>
          <label> Password </label>
          <input id="password" value={formik.values.password} onChange={formik.handleChange} type="text" name="password" placeholder="Enter Password" className="m-4" />
          {formik.errors.password &&
            <div className="text-red-200 text xs"> {formik.errors.password} </div>}
        </div>

        <div className="bg-violet-400 text-black font-bold text-xl"></div>
        <button className="bg-red-200 px-28 text-black font-bold text-xl">Submit</button>
        <div className="text-black font-bold text-xl"></div>
        <button>Forgot Password</button>
      </form>


    </div >
  )
}

export default Login;