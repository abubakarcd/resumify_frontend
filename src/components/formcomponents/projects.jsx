import React,{useState} from "react";
import Skills from "./skills";
import Certification from "./certification";

function Projects() {
  const [save, setsave] = useState(false);
  const [back , setback]=useState(false);
  const [projects, setprojects]=useState([{project_name:"",project_description:"", project_date:""}])
//save and continue
  function toskill() {
    setsave(true);
  }
//go back to certification 
function goback(){
 setback(true);
}

//add porjects
function addprojects(){
  const projectcopy=[...projects];
 projectcopy.push({project_name:"",project_description:"", project_date:""});
  setprojects(projectcopy);
 }
 //delete projects
 function deleteprojects(indexM) {
  const projectcopy=[...projects];
  projectcopy.splice(indexM, 1)
   setprojects(projectcopy);
 }
  return (
    <>
    {back?(<Certification/>):(<>
      {save ? (
        <><Skills/></>
      ) : (
        <>
          <div className="projects-form-container">

            <form className="projects-form" onSubmit={toskill}>
              {projects.map((_,index)=>(<><div className="main" key={index} >
            <div className={`form-header form-header-${index}`} >
              <h2>Project Details {index+1}</h2>
              {index===0 &&
              <button className={`back-button`} onClick={goback}>Back</button>}
              {index > 0 && <button type="button" className={`del del-${index}`} onClick={()=>deleteprojects(index)}>delete</button>}
            </div>
              <div className={`input-group input-group-${index}`}>
                <label htmlFor="project-name">Project Name:</label>
                <input
                  type="text"
                  id={`project-name-${index} project-name `}
                  name={`project-name-${index} project-name`}
                  placeholder="Enter the project name"
                 
                />
              </div>

              <div className={`input-group-${index} input-group`}>
                <label htmlFor={`project_description-${index} project_description`}>Description:</label>
                <textarea
                  id={`project_description-${index} project_description` }
                  name={`project_description-${index} project_description`}
                  placeholder="Enter the project description"
                  rows="4"
                  
                />
              </div>

              <div className={`input-group-${index} input-group`}>
                <label htmlFor={`project_date-${index} `}>Project Date:</label>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  pattern="\d{4}"
                  id={`project_date-${index} project_date`}
                  name={`project_date-${index} project_date`}
                  
                />
              </div>
              </div>
              </>))}

              <div className="button-group-projects">
                <button type="button" className="add-button" onClick={addprojects}>Add Project</button>
                <button className="save-button" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      </>)}
    </>
  );
}

export default Projects;
