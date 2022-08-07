import React, {useState} from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import client, {API_LIST} from "../../ApiConfig";
import {useNavigate} from "react-router-dom";
import MyTextInput from "../MyTextInput";
import LoadingSpinner from "../LoadingSpinner";
import CustomToastContainer from "../CustomToastContainer";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LoginForm(props) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    return (<>
        {isLoading?<LoadingSpinner/>:<Formik
            initialValues={{

                email: '', password: ''
            }}
            validationSchema={Yup.object({

                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email Required'), password: Yup.string()
                    .required('No password provided.')
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setIsLoading(true);
                client.post(API_LIST.SIGN_IN, values)
                    .then(response => {
                        localStorage.setItem("token", response.data.jwt);
                        setIsLoading(false)
                        navigate("/dashboard")
                    })
                    .catch(error => {
                        setIsLoading(false)
                        toast.error('Login Failed!!', {
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
                <button type="submit">Login</button>
            </Form>
        </Formik>}
        <CustomToastContainer/>
    </>);
}

export default LoginForm;