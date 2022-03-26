import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotpassword } from '../services/auth';

function Resetpassword( ) {
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
    return(
    <div>
        <header>
            <form>
            <div className="h-screen grid grid rows-3 w-full mx-auto text-center bg-violet-400 text-black font-bold text-xl ">
                <div>Reset Password</div>
                <br/>
                    <div>
                        <input type="text" name="Email:" placeholder="EnterEmail" />
                    </div>
                    <div>
                        <input type="submit" name="Reset Password" value="submit"/>
                    </div>
            </div>
            </form>
        </header>
    </div>
    );
}
export default Resetpassword