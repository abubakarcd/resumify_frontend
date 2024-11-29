import React, { useState } from "react";
import Projects from "./projects";
import Education from "./Education";

function Certification(){
    const [save,setsave]=useState(false);
    const [back,setback]=useState(false);
    const [certificate,setcertificate]=useState([{name:"",organization:"", date:""}])
//save and continue to projects
function toprojects(){
   setsave(true);
}

//add certification
function addcertification(){
 const certificatecopy=[...certificate];
 certificatecopy.push({name:"",organization:"", date:""});
 setcertificate(certificatecopy);
}


//back button pressed to go back to education
function goback(){
    setback(true);
}


    return (<>
    {save?(<><Projects/></>):(<>
     {back?(<><Education/></>):(<>
        <div className="certification-form-container">

          <form className="certification-form" onSubmit={toprojects}>
            {certificate.map((_,index)=>(<>
            <div className={`form-header form-header-${index}`}>
            <h2>Certification Details {index}</h2>
            {index===0 &&(<><button className="back-button" onClick={goback}>Back</button></>)}
            {index>0 && (<button className="delete-button" onClick={goback}>Delete</button>)}
          </div>
            
                
            <div className={`1input-group name-${index}`}>
              <label htmlFor={`certification-name-${index}`}>Certification Name:</label>
              <input
                type="text"
                id={`name-${index}`}
                name={`name-${index}`}
                placeholder="Enter the certification name"
        
              />
            </div>

            <div className={`input-group organization-${index}`}>
              <label htmlFor={`organization-${index}`}>Organization:</label>
              <input
                type="text"
                id={`organization-${index}`}
                name={`organization-${index}`}
                placeholder="Enter the organization name"
        
              />
            </div>

            <div className={`input-group date-${index}`}>
              <label htmlFor={`date-${index}`}>Date of Certification:</label>
              <input
                 type="text"
                 maxLength={4}
                 placeholder="YYYY"
                 pattern="\d{4}"
                 id={`date-${index}`}
                 name={`date-${index}`}
                
              />
            </div>

            
            </>))}
            <div className={`button-group `}>
             <button type="button" className={`add-button `} onClick={addcertification}>
             Add Certification
            </button>
            
             <button className="save-button" type="submit">
               Save
              </button>
            </div>
         </form>
        </div>
        </>)}
      </>)}
    </>)
}
export default Certification;