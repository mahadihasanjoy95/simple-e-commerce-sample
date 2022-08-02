import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import client, {API_LIST} from "../ApiConfig";
import {useNavigate} from "react-router-dom";

function LoginForm(props) {
    const navigate = useNavigate()
    return (<>
            <Formik
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
                    client.post(API_LIST.SIGN_IN, values)
                        .then(response => {
                            localStorage.setItem("token", response.data.jwt);
                            navigate("/")
                            }
                        )
                        .catch(error => {
                            alert("User Logged In Failed")
                        });
                }}
            >
                <Form>
                    {props.children}
                </Form>
            </Formik>
        </>);
}

export default LoginForm;