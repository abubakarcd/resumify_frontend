import React, { useEffect, useState } from "react";
import "../../style/form.css";
import Experience from "./Experience.";
import Home from "../Home";

function Info(props) {
  const [info, setinfo] = useState(false);
  const [back, setback] = useState(false);
  const [wholeuserinfo,setwholeuserinfo]=useState([]);
  const [userinfo, setuserinfo] = useState({
    name: "",
    profession: "",
    linkedin: "",
    email: "",
    summary: "",
    phone: "",
  });
  //for returing from experience we want to store user input in experience
  useEffect(() => { 
    if (props.wholeuserinfoback) {
      console.log(props.wholeuserinfoback);
      setuserinfo(props.wholeuserinfoback[0]);
      setwholeuserinfo(props.wholeuserinfoback);
    }
  }, [props.wholeuserinfoback]);
  
  //when save btn is clicked it will take you to the experience sections
  function toexperience(e) {
    e.preventDefault();
    const userinfocopy=[...wholeuserinfo];
    wholeuserinfo[0]?wholeuserinfo[0]=userinfo:
    userinfocopy.push(userinfo);
    setwholeuserinfo(userinfocopy);
    setinfo(true);
  }

  //go back to home page
  function goback() {
    setback(true);
  }

  return (
    <>
      {back ? (
        <>
          <Home />
        </>
      ) : (
        <>
          {info ? (
            <>
            <Experience wholeuserinfosend={wholeuserinfo} />
            </>
          ) : (
            <div className="resume-container">
              {/* Header Section */}
              <div className="resume-header">
                <h1>Create Your Resume</h1>
                <button className="back-button" onClick={goback}>
                  Back
                </button>
              </div>

              {/* Personal Info Section */}
              <div className="resume-section">
                <h2>Personal Info</h2>
                <form onSubmit={toexperience}>
                  <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      pattern="[A-Za-z\s]+"
                      title="Only alphabets and spaces are allowed"
                      value={userinfo.name}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="profession">Profession:</label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      placeholder="Enter your profession e.g Website developer"
                      value={userinfo.profession}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="^\+92\d{10}$"
                      maxLength="13"
                      placeholder="Enter your phone number e.g +923094222806"
                      title="Please enter a valid phone number"
                      value={userinfo.phone}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email e.g abcd@gmail.com"
                      maxLength="100"
                      value={userinfo.email}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="linkedin">LinkedIn:</label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      placeholder="Enter your LinkedIn URL"
                      pattern="https?://(www\.)?linkedin\.com/.+"
                      title="Please enter a valid LinkedIn URL starting with https://www.linkedin.com/"
                      value={userinfo.linkedin}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                      id="summary"
                      name="summary"
                      placeholder="Write a brief summary about yourself"
                      rows="4"
                      value={userinfo.summary}
                      onChange={(e) =>
                        setuserinfo({
                          ...userinfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <button className="submit-button save" type="submit">
                    Save and Continue
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default Info;
