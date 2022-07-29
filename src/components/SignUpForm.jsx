import React from 'react';
import {Form, Formik, useField} from "formik";
import * as Yup from 'yup';
function SignUpForm(props) {
    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
    };
    const MyCheckbox = ({ children, ...props }) => {
        const [field, meta] = useField({ ...props, type: 'checkbox' });
        return (
            <div>
                <label className="checkbox-input">
                    <input type="checkbox" {...field} {...props} />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };
    return (
        <>
            <h1>Subscribe!</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false, // added for our checkbox
                    jobType: '', // added for our select
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
}

export default SignUpForm;