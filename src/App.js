import './App.css';
import AuthLayout from "./layouts/AuthLayout";
import {Route, Routes} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import React from "react";
import Error from "./Error";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useField} from "formik";
import ItemDetails from "./components/ItemDetails";




function App() {
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
    return (<div className={"App"}>
            <Routes>
                <Route path={"/auth"} element={<AuthLayout/>}>
                    <Route path={"logIn"} element={<LoginForm> <MyTextInput
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

                    </LoginForm>}></Route>
                    <Route path={"signUp"} element={
                        <SignUpForm>
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
                        </SignUpForm>}></Route>
                </Route>
                <Route path={"/"} element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}></Route>
                    <Route path={"/itemDetails/:id"} element={<ItemDetails/>}></Route>
                </Route>
                <Route path={"*"} element={<Error/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
