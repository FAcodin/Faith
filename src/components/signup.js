import { useFormik } from 'formik';
import React, { useState } from 'react';
import { signUp } from '../services/auth';
import { signupvalidationSchema } from '../utils/formutils';
import {FaSpinner} from 'react-icons/fa';



function SignUp() {
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
setProcessing (true)

        },
        validationSchema: signupvalidationSchema
    })

    return (
        <div className="bg-violet-400">
            <header className='grid grid rows-3 w-full mx-auto gap-10 text-center bg-red-900'>
                <h1>WELCOME!</h1>
            </header>
            <div className='grid grid rows-3 w-full mx-auto gap-10 text-center h-screen text-black font-bold text-xl bg-red-900'>
                <h2>SignUp</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label> First Name </label>
                        <input id="firstName" value={formik.values.firstName} onChange={formik.handleChange} type="text" name="firstName" placeholder="First Name" className="m-2" />
                    </div>
                    <div>
                        <label> Last Name </label>
                        <input id="lastName" value={formik.values.lastName} onChange={formik.handleChange} type="text" name="lastName" placeholder="Last Name" className="m-4" /></div>
                    <div>
                        <label> Email </label>
                        <input id="email" value={formik.values.email} onChange={formik.handleChange} type="text" name="email" placeholder="Enter Email" className="m-4" />
                        {formik.errors.email &&
                            <div className="text-red-500 text xs">
                                {formik.errors.email}</div>}
                    </div>
                    <div>
                        <label> Password </label>
                        <input id="password" value={formik.values.password} onChange={formik.handleChange} type="text" name="password" placeholder="Enter Password" className="m-4" />
                    </div>
                    <div>
                        <label> Phone Number </label>
                        <input id="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange} type="text" name="phonenumber" placeholder="Phone Number" className="m-4" />
                    </div>
                    <div>
                        <label> Home Address </label>
                        <input id="homeaddress" value={formik.values.homeaddress} onChange={formik.handleChange} type="text" name="homeaddress" placeholder="Home Address" className="m-4" />
                    </div>
                    <div className="bg-red-900 text-black font-bold text-xl"></div>
                    {/* <input type="submit" name="Log In" value="submit">Submit</input> */}
                    <button className="bg-red-200 px-28 text-black font-bold text-xl">Submit</button>
                    <p>
                        {processing && <FaSpinner icon="spinner" className="spinner animate-spin " size={35} />}
                    </p>
                </form>
            </div>
        </div>

    );
}
export default SignUp;