import React, { useEffect, useState } from "react";
import Projects from "./projects";
import Resumeoptions from "./resumeoptions";
import { useForm } from 'react-hook-form';


function Skills(props) {
  const [save, setsave] = useState(false);
  const [back, setback] = useState(false);
  const [skill, setskill] = useState([{ skill_name: "" }]);
  
  
   useEffect(() => {
          //console.log(props.wholeuserinfosend);
             if (props.wholeuserinfosend[5]) {//checkin whether skill exists before or not
               setskill(props.wholeuserinfosend[5]);
             }
           }, [props.wholeuserinfosend]);
  //save and continue tocreate resume
  function createresume(e) {
    e.preventDefault();
    // if (skill.some((skills) => !skills.skill_name.trim())) {
    //   alert("Please fill in all skill fields.");
    //   return;
    // }
    props.wholeuserinfosend[5]?props.wholeuserinfosend[5]=skill:props.wholeuserinfosend.push(skill);
    console.log(props.wholeuserinfosend);
    setsave(true);
  }
  //go back to projects
  function goback() {
    props.wholeuserinfosend[5]?props.wholeuserinfosend[5]=skill:props.wholeuserinfosend.push(skill);
    setback(true);
  }

  //add porjects
  function addskill() {
    const skillcopy = [...skill];
    skillcopy.push({ skill_name: "" });
    setskill(skillcopy);
  }
  //delete projects
  function deleteskill(indexM) {
    const skillcopy = [...skill];
    skillcopy.splice(indexM, 1);
    setskill(skillcopy);
  }

  return (
    <>
      {back ? (
        <Projects wholeuserinfosend={props.wholeuserinfosend}/>
      ) : (
        <>
          {save ? (
            <Resumeoptions wholeuserinfosend={props.wholeuserinfosend }/>
          ) : (
            <>
              <div className="skills-form-container">
                <form className="skills-form" >
                  <h2>Skills </h2>
                  {skill.map((skills, index) => (
                    
                      <div className="main" key={index}>
                        <div className={`form-header form-header-${index} `}>
                          <h2></h2>
                          {index === 0 && (
                            <button className="back-button" onClick={goback}>
                              Back
                            </button>
                          )}
                          {index > 0 && (
                            <button className="del" onClick={deleteskill}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div className={` input-group input-group-${index}`}>
                          <label htmlFor="skill_name">
                            Skill {index + 1} :
                          </label>
                          <input
                            type="text"
                            id={`skill_name-${index} skill_name`}
                            name={`skill_name-${index} skill_name`}
                            placeholder="Enter a skill (e.g., JavaScript)"
                            required
                            value={skills.skill_name}
                            onChange={(e)=>{
                             
                              const updatedskills = [...skill];
                              updatedskills[index].skill_name = e.target.value; 
                              setskill(updatedskills);
                            }}
                           
                          />
                        </div>
                      </div>
                    
                  ))}
                  <div className="button-group-projects">
                    <button
                      className="add-button"
                      type="button"
                      onClick={addskill}
                    >
                      Add Skill
                    </button>
                    <button className="save-button" onClick={createresume}>
                      Create Resume
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Skills;
