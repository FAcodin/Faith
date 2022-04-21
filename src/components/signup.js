import { useFormik } from 'formik';
import React, { useState } from 'react';
import { signUp } from '../services/auth';
import { signupvalidationSchema } from '../utils/formutils';
import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";



function SignUp() {
    const navigate = useNavigate()
    const [processing, setProcessing] = useState(false)
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phonenumber: "",
            homeaddress: "",
        },
        onSubmit: (values) => {
            setProcessing(true)

            //call firebase to SignUp
            signUp(values)
            setProcessing(true)

        },
        validationSchema: signupvalidationSchema
    })
    const loginHandler = () => {
        navigate("/login")
    }

    return (
        <div className="bg-[url('./images/welcome.jpg')] bg-cover h-screen">
            <ul className="lg:mt-8 mt-4 ml-2 flex flex-nowrap flex-1 md:justify-end sm:justify-center  mspace-x-4">
                <button onClick={loginHandler} className=" bg-white px-10 h-12 mr-8 nav cursor-pointer text-md hover:transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110" >LogIn</button>
            </ul>
            <header>
                <form>
                    <h2 className="text-white text-white font-bold text-4xl">SignUp</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label> First Name </label>
                            <input className="border border-4 border-black-400 m-2 mb-6 md:w-35 h-10  shadow-inner rounded py-2 w-1/4 placeholder:text-white-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="firstName" value={formik.values.firstName} onChange={formik.handleChange} type="text" name="firstName" placeholder="First Name" />
                        </div>
                        <div>
                            <label> Last Name </label>
                            <input className=" border border-4 border-black-400 m-2 mb-6 md:w-35 h-10 shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="lastName" value={formik.values.lastName} onChange={formik.handleChange} type="text" name="lastName" placeholder="Last Name"/></div>
                        <div>
                            <label> Email </label>
                            <input className=" border border-4 border-black-400 m-2 mb-6 md:w-35 h-10 shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="email" value={formik.values.email} onChange={formik.handleChange} type="text" name="email" placeholder="Enter Email" />
                            {formik.errors.email &&
                                <div className="text-red-500 text xs">
                                    {formik.errors.email}</div>}
                        </div>
                        <div>
                            <label> Password </label>
                            <input className=" border border-4 border-black-400 m-2 mb-6 md:w-35 h-10 shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="password" value={formik.values.password} onChange={formik.handleChange} type="password" name="password" placeholder="Enter Password" />
                        </div>
                        <div>
                            <label> Phone Number </label>
                            <input className=" border border-4 border-black-400 m-2 mb-6 md:w-35 h-10 shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange} type="text" name="phonenumber" placeholder="Phone Number" />
                        </div>
                        <div>
                            <label> Home Address </label>
                            <input className=" border border-4 border-black-400 m-2 mb-6 md:w-35 h-10 shadow-inner rounded py-2 w-1/4 placeholder:text-gray-350 font-light font-md text-left md:text-3xl sm:text-2xl text-center " id="homeaddress" value={formik.values.homeaddress} onChange={formik.handleChange} type="text" name="homeaddress" placeholder="Home Address" />
                        </div>
                        <div className="bg-red-400 text-black font-bold text-xl"></div>
          <button type="submit" className="bg-red-200 px-28 text-black font-bold text-xl">Submit</button>
          <div className="text-black font-bold text-xl"></div>
                        <p>
                            {processing && <FaSpinner icon="spinner" className="spinner animate-spin " size={35} />}
                        </p>
                    </form>
                </form>
            </header>
        </div>
    )
}
export default SignUp;