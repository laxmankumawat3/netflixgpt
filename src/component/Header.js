import React from "react";
import logo from "./Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../util/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setTogglegptsearchbtn } from "../util/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  // const  user = JSON.parse(localStorage.getItem("user"))
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.togglegptsearchbtn)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse");
      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        nevigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handlegpttoggle = ()=>{
    dispatch(setTogglegptsearchbtn())
  }
  return (
    <div className="headercontainer">
      <div>
        <img style={{ width: "6rem" }} src={logo} alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            color: "black",
            fontWeight: "700",
            marginRight: "1rem ",
            fontSize: "1.2rem",
          }}
        >
          {user?.displayName}
        </h3>
        <button
          style={{
            backgroundColor: "red",
            margin: ".2rem",
            padding: ".5rem",
            borderRadius: ".3rem",
          }}
          onClick={handleSignout}
        >
          Sign Out{" "}
        </button>
        <button
          style={{
            backgroundColor: "blue",
            margin: ".2rem",
            padding: ".5rem",
            borderRadius: ".3rem",
          }}
          onClick={handlegpttoggle}
        >
        {showGptSearch ?  "Home" : "Gpt Search"}
        </button>
      </div>
    </div>
  );
};

export default Header;
