import React, { useState } from "react"
import "../style/signup.css"
import logo from "../assets/logo.png"
import MyNavbar from "./Navbar";
import LandingPage from "./Landingpage";


function Signup(){
    const [userregistered,setuser]=useState(false);
   //signup with google and checks whether the user exists in DB or not
    function signWithGoogle(){
      setuser(true);
    }


    return (<>
        {userregistered ? (<><LandingPage/></>) :(
    <div id="signup">
       <div id="signin">
        <div id="logo"><img src={logo} alt="logo"/><p>Resumify</p></div>
        <div id="heading"><h1>Join the Resume Revolution</h1> <p>Empowering you with the tools to create a resume that opens the door to your next big opportunity.Empowering you with the tools to create a resume that opens the door to your next big opportunity Empowering you with the tools to create a resume that opens the door to your next big opportunity.Empowering you with the tools to create a resume that opens the door to your next big opportunity</p></div>
        <div id="signinbtn"><button onClick={signWithGoogle}>Sign In with Google.</button></div>
       </div>
       
    </div>)}
    </>
);
}

export default Signup;