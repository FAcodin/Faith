import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotpassword } from '../services/auth';
import { Link, useNavigate } from "react-router-dom";


function Resetpassword( ) {
  const navigate = useNavigate()
    const[serverError,setServerError] =useState("")
    const formik = useFormik({
        initialValues: {
          email: "",
        },
        onSubmit: (values) => {
          //call firbase to signup 
          forgotpassword(values,onSuccess,onFailure);
        },
        validationSchema: Yup.object().shape({ 
            email: Yup.string().required('Email is required').email("Email is invalid"),
        
        }),
      })
      const onSuccess =() => {
        //callback onSuccess
      }
      const onFailure =(message) => {
        setServerError(message);
      }
      const loginHandler = () => {
        navigate("/login")
      }
    return(
      <div className="bg-[url('./images/forgot.jpg')] bg-cover h-screen">
    <div>
    <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
          <button onClick={loginHandler} className=" bg-white px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >LogIn</button>
        </ul>
        <header>
            <form>
            <div className="grid grid rows-3 w-full mx-auto text-center text-black font-bold text-xl ">
            <h2 className=" text-center border border-4 border-black-400 m-4 mb-8 md:w-90 h-20  shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " >FORGOT PASSWORD</h2>
                    <div>
                        <input className=" border border-4 border-black-400 m-4 mb-10 md:w-95 h-20  shadow-inner rounded py-2 w-1/2 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " type="text" name="Email:" placeholder="EnterEmail" />
                    </div>
                    <div>
                        <input className="bg-white px-28 text-black font-bold text-xl" type="submit" name="Reset Password" value="submit"/>
                    </div>
            </div>
            </form>
        </header>
    </div>
    </div>
    );
}
export default Resetpassword