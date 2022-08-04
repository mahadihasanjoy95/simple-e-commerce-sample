import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import client, {API_LIST} from "../ApiConfig";
import MyTextInput from "./MyTextInput";
import MyCheckbox from "./MyCheckbox";
import {useNavigate} from "react-router-dom";

function SignUpForm(props) {
    const navigate = useNavigate()
    return (<>
        <Formik
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
                client.post(API_LIST.SIGN_UP, values)
                    .then(response => {
                        alert("User Signed Up Successfully!!")
                        navigate("/")
                    })
                    .catch(error => {
                        alert("User Signed Up Failed")
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
        </Formik>
    </>);
}

export default SignUpForm;