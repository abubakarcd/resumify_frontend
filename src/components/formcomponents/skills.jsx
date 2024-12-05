import React,{useState} from "react";
import Projects from "./projects";

function Skills(){
  const [save, setsave] = useState(false);
  const [back , setback]=useState(false);
  const [skill, setskill]=useState([{skill_name:""}])
  //save and continue tocreate resume
  function createresume() {
    setsave(true);
  }
//go back to projects 
function goback(){
 setback(true);
}

//add porjects
function addskill(){
  const skillcopy=[...skill];
skillcopy.push({skill_name:""});
  setskill(skillcopy);
 }
 //delete projects
 function deleteskill(indexM) {
  const skillcopy=[...skill];
 skillcopy.splice(indexM, 1);
    setskill(skillcopy);
  
   
 }

    return(<>
    {back?(<Projects/>):(<>
    {save?(<><h1>created</h1></>):(<>
    <div className="skills-form-container">
  

  <form className="skills-form" >
  <h2>Skills </h2>
    {skill.map((_,index)=>(<><div className="main" key={index}>
  <div className={`form-header form-header-${index} `} >
    <h2></h2>
    {index===0 &&
    <button className="back-button" onClick={goback}>Back</button>}
     {index>0 &&
    <button className="del" onClick={deleteskill}>Delete</button>}

  </div>
    <div className={` input-group input-group-${index}` } >
      <label htmlFor="skill_name">Skill {index +1} :</label>
      <input
        type="text"
        id={`skill_name-${index} skill_name`}
        name={`skill_name-${index} skill_name`}
        placeholder="Enter a skill (e.g., JavaScript)"
        required
      />
    </div>
    </div>
    </>))}
    <div className="button-group-projects">
      <button className="add-button" type="button" onClick={addskill}>
        Add Skill
      </button>
      <button className="save-button" onClick={createresume} >
        Create Resume
      </button>
    </div>
  </form>
</div>
</>)}
</>)}
    </>)
}

export default Skills;