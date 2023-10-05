import React, { useRef, useState } from "react";
import logo from "./Netflix_Logo_PMS.png";
import "./login.css";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../util/firebase";

const Login = () => {
  
  const [isSingin , setIsSignIn] = useState(true);
  const email = useRef(null)
  const password = useRef(null);
  const name = useRef(null);
  console.log(email)

  
   
  const handleclick = ()=>{
    setIsSignIn(!isSingin);
  }
  const handlebtnClick =()=>{
    console.log(email.current.value)
    if(isSingin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode + " " + errorMessage);
        });
    }
   else{

   }
  }

  return (
    <div className="App">
      <img src={logo} alt="logo" className="loginlogo" />
      <form className="formfild" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="loginheaing">{isSingin ? "Sign In" : "Sign Up"}</h1>
        {
          !isSingin && 
          <div className="inputbox">
          <label className="labelbox" htmlFor="name">
            Name
          </label>
          <input
           ref={name}
            type="text"
            placeholder="Enter Your Name"
            id="name"
            required
            className="inputfild"
          />
        </div>
        }
        <div className="inputbox">
          <label className="labelbox" htmlFor="email">
            Email
          </label>
          <input
          ref={email}
            type="email"
            placeholder="Enter Your Email Id "
            id="email"
            required
            className="inputfild"
          />
        </div>
        <div className="inputbox">
          <label className="labelbox" htmlFor="password">
            Password
          </label>
          <input
          ref={password}
            placeholder="Enter Your password  "
            type="password"
            id="password"
            required
            className="inputfild"
          />
        </div>
        <div className="inputbox">
          <input type="submit" className="submitbtn" onClick={handlebtnClick} />
        </div>

        <div> <p onClick={handleclick}> {isSingin ?  "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}</p></div>
      </form>
    </div>
  );
};

export default Login;
