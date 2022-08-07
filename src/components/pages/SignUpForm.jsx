import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import client, {API_LIST} from "../../ApiConfig";
import MyTextInput from "../MyTextInput";
import MyCheckbox from "../MyCheckbox";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import LoadingSpinner from "../LoadingSpinner";
import CustomToastContainer from "../CustomToastContainer";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUpForm(props) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    return (<>
        {isLoading?<LoadingSpinner/>:<Formik
            initialValues={{
                firstName: '', lastName: '', email: '', password: '', acceptedTerms: false, // added for checkbox
                roles: 'user',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'), lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'), email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'), acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'), password: Yup.string()
                    .required('No password provided.')
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setIsLoading(true)
                client.post(API_LIST.SIGN_UP, values)
                    .then(response => {
                        toast.success('User Signup Successfully!', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setIsLoading(false)

                        navigate("/")
                    })
                    .catch(error => {
                        setIsLoading(false)
                        toast.error('Signup Failed!!', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    });
            }}
        >
            <Form>
                <MyTextInput
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                />
                <br/>
                <br/>
                <MyTextInput
                    name="lastName"
                    type="text"
                    placeholder="Second Name"
                />
                <br/>
                <br/>
                <MyTextInput
                    name="email"
                    type="email"
                    placeholder="email@g.c"
                />
                <br/>
                <br/>
                <MyTextInput
                    name="password"
                    type="password"
                    placeholder="*****"
                />
                <br/>
                <br/>
                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>
                <button type="submit">Submit</button>
            </Form>
        </Formik>}
        <CustomToastContainer/>
    </>);
}

export default SignUpForm;