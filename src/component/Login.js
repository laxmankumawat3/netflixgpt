import React, { useRef, useState } from "react";
import logo from "./Netflix_Logo_PMS.png";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../util/userSlice";


const Login = () => {
  const [isSingin, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const nevigete = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
 

  const toggleSigninform = () => {
    setIsSignIn(!isSingin);
  };
  const handlebtnClick = () => {
  
    if (!isSingin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
       
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user,{
            displayName : name.current.value,
          })
          .then(()=>{
            const {uid , email  , displayName } = auth.currentUser;
            dispatch(addUser({uid : uid , email :email, displayName : displayName}));
            localStorage.setItem('user' , {uid : uid , email :email, displayName : displayName})
            const login = ()=>{
              localStorage.setItem("login", true);
            }
            let logins = localStorage.getItem("login")
           if(login){

             nevigete("/browse")
           }
          })
          .catch((error)=>{
            setMessage(error.message);
          })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
         
          setMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        
          nevigete("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="logo" className="loginlogo" />
      <form className="formfild" onSubmit={(e) => e.preventDefault()}>
        <h1 className="loginheaing">{isSingin ? "Sign In" : "Sign Up"}</h1>
        {!isSingin && (
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
        )}
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

        <div className="usermessage">
          <p className="message"> {message} </p>
        </div>

        <div className="loginbottom">
          {" "}
          <p onClick={toggleSigninform}>
            {" "}
            {isSingin
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
