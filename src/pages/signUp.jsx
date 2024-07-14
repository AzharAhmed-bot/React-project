import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Signin from "../assets/signin.png"
import "../Styles/SignUp.css"


const signUp = () => {
    return (
        <div className="signUp">
            <CustomNavbar />
            <div className="signup">
        <form className="signUp-form">
            <h1>Create account!</h1>
            <div className="input-group">
                <label for="name">First Name</label>
                <div className="input-wrapper">
                    
                    <input type="text" id="name" name="name" placeholder="Enter first name"/>
                </div>
            </div>
            <div className="input-group">
                <label for="email">Email</label>
                <div className="input-wrapper">
                
                    <input type="email" id="email" name="email" placeholder="Enter email"/>
                </div>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <div className="input-wrapper">
                    
                    <input type="password" id="password" name="password" placeholder="Enter password"/>
                </div>
            </div>
            <button className="signup-btn">Sign Up</button>
            <span className="sign-up">Already have an account? <a href="/login">Sign in</a></span>
        </form>
        <div className="signup-bg-image">
            <img src={Signin} alt="Sign In"/>
        </div>
    </div>
            
        </div>
    )
}
export default signUp;