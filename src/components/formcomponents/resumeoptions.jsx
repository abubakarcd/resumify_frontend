import React, { useState } from "react";
import resume1 from "../../assets/resumemine1.png";
import resume2 from "../../assets/resume g3.png";
import resume3 from "../../assets/resume google 1.png";
import Resume_c1 from "./resume_c1";
import "../../style/resumeoption.css"
import Skills from "./skills";
import Resume_c2 from "./resume_c2";
import Resume_c3 from "./resume_c3";
//use will select the style of the resume
function Resumeoptions(props){
  console.log(props.wholeuserinfosend);
  
   const [resume_c1,setresume1]=useState(false);
   const [resume_c2,setresume2]=useState(false);
   const [resume_c3,setresume3]=useState(false);
   const[font,setfont]=useState("Arial");
    const [back,setback]=useState(false);
    //go back to skills
    function goback(){
      setback(true);
    }
    //go to form resume 
    function resumestyle(e){
        const style=e.currentTarget.dataset.name;
        switch (style) {
            case "resume1":
                setresume1(true);
                break;
                case "resume2":
                    setresume2(true);
                    break;
                case "resume3":
                    setresume3(true);
                    break;
            default:
                break;
        }

    }
    //selcting font family and sending it to resume selected
    function fontfamily(event){
      const fontfam=event.target.value;
      setfont(fontfam);
    }
    return (<>
    {back?<Skills wholeuserinfosend={props.wholeuserinfosend}/>:resume_c1 ? (<Resume_c1 font_family={font} wholeuserinfosend={props.wholeuserinfosend}/>):(resume_c2?<Resume_c2 font_family={font} wholeuserinfosend={props.wholeuserinfosend}/>:resume_c3?<Resume_c3 font_family={font} wholeuserinfosend={props.wholeuserinfosend}/>:
    
    <div className="resume-container-options">
    
      <h2>Choose Your Resume Style</h2>
      <div>
  <label htmlFor="font-select">Select Font:</label>
  <select id="font-select" onChange={fontfamily}>
    <option value="Arial">Arial</option>
    <option value="Times New Roman">Times New Roman</option>
    <option value="Georgia">Georgia</option>
    <option value="Verdana">Verdana</option>
    {/* Add more font options as needed */}
  </select>
</div>
      <div className="resume-options">
        <div className="resume-preview" data-name="resume1" onClick={resumestyle}>
          <img src={resume1} alt="Resume 1" />
        </div>
        <div className="resume-preview" data-name="resume2" onClick={resumestyle}>
          <img src={resume2} alt="Resume 2" />
        </div>
        <div className="resume-preview" data-name="resume3" onClick={resumestyle}>
          <img src={resume3} alt="Resume 3" />
        </div>
      </div>
      <div className="buttons">
        <button className="back-btn" onClick={goback}>Back</button>
      </div>
    </div>

)}
</>)
}
export default Resumeoptions;