import React, { useState } from "react";
import  "../../style/form.css";
import Experience from "./Experience.";
import Home from "../home";

function Info(){
    const [info,setinfo]=useState(false);
    const [back, setback]=useState(false);
//when save btn is clicked it will take you to the experience sections
function toexperience(){
  setinfo(true);
}

//go back to home page
function goback(){
  setback(true);
}

    return(<>
    {back?(<><Home/></>):
    <>
    {info ? (<><Experience/></>):
    <div className="resume-container">
        {/* Header Section */}
        <div className="resume-header">
          <h1>Create Your Resume</h1> 
          <button className="back-button" onClick={goback}>Back</button>
        </div>
      
        {/* Personal Info Section */}
        <div className="resume-section">
            <h2>Personal Info</h2>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              name="profession"
              placeholder="Enter your profession"
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="Enter your LinkedIn profile URL"
            />
          </div>
          <div className="input-group">
            <label htmlFor="summary">Summary:</label>
             <textarea
              id="summary"
              name="summary"
              placeholder="Write a brief summary about yourself"
              rows="4"
             >
             </textarea>
    </div>
          
        </div>
      
        {/* Submit Button */}
        <button className="submit-button save" onClick={toexperience}>Save and Continue</button>
      </div>}</>
    }</>);
}
export default Info;