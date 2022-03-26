import * as Yup from "yup";
export const signupvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
phonenumber: Yup.string().required("Phone Number is required"),
homeaddress: Yup.string().required("Home Address is required")

});
export const loginvalidationSchema = Yup.object().shape({ 
    email: Yup.string().required('Email is required').email("Email is invalid"),
    password: Yup.string().required("Password is required"),





});
