import React from "react";

export default function SignInForm(){
    return (
        <div className="container">
            <div className="form-box">
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
                        <div className="message">
                            <div><input type="checkbox"/> Remember ME</div>
                            <div><a href="#">Forgot your password</a></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}