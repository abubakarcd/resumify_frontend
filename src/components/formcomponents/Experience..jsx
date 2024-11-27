import React, { useState } from "react";
import  "../../style/form.css";
import Info from "./info";

function Experience(){
    const [back, setback]=useState(false);
    const [work,setwork]=useState([{title:"",company:"", date:"", responsibility:[]}]);

    //go back to home page
  function goback(){
    setback(true);
  }

  //add point for responsibility
  function addpoint(indexM){
   const workcopy=[...work];
   workcopy[indexM].responsibility.push("");
   setwork(workcopy);
    
  }
  //delete responsiblity
  function deleterespons(index,indexM){
    const workcopy=[...work];
   workcopy[indexM].responsibility.splice(index,1);
    setwork(workcopy);

  }

  //add work experience. 1. this will add the work experience input when add expereience button is pressed
  function addwork(){
    //console.log(work);
    const workcopy=[...work];
    workcopy.push({title:"",company:"", date:"", responsibility:[]})
    setwork(workcopy);
    
  }
  //delete work
  function deletework(indexM){
    const workcopy=[...work];
    workcopy.splice(indexM,1);
    setwork(workcopy);
  }

    return(<>

     {back?(<><Info/></>):
        <>
            {work.map((_,indexM)=>(
                <div className={` experience-section experience-section-${indexM}`} key={indexM}>

                   <div className={` resume-header resume-header-${indexM} exp`}> 
                      <h2>Experience</h2>
                      {indexM>0&&(
                      <button onClick={deletework}>Delete</button>)}
                      {indexM==0&&(
                     <button className="back-button" onClick={goback}>Back</button>)}
                   </div>

                   <div className={` input-group input-group-${indexM}`}>
                       <label htmlFor={`title title-${indexM}`}>Title:</label>
                       <input
                        type="text"
                        id={`title-${indexM}`}
                        name={`title-${indexM}`}
                        placeholder="Enter your job title"
                       />
                   </div>

                   <div className={`input-group input-group-${indexM}`}>
                         <label htmlFor={`company-${indexM}`}>Company Name:</label>
                         <input
                           type="text"
                           id={`company-${indexM}`}
                           name={`company-${indexM}`}
                           placeholder="Enter company name"
                         />
                    </div>

                    <div className={`input-group input-group-${indexM}`}>
                         <label htmlFor={`date-${indexM}`}>Date:</label>
                         <input
                           type="text"
                           id={`date-${indexM}`}
                           name={`date-${indexM}`}
                           placeholder="Enter date (e.g., Jan 2020 - Dec 2022)"
                         />
                    </div>
                 {work[indexM].responsibility.map((_, index) => (
                     <div key={index} className={`input-group input-group-${indexM}`}>
                         <label htmlFor={`responsibility-${index}-${indexM}`}>Responsibility:</label>
                         <input
                           type="text"
                           id={`responsibility-${index}-${indexM}`}
                           name={`responsibility-${index}-${indexM}`}
                           placeholder="Enter a responsibility"
                         />
                         
                         <button type="button" onClick={()=>deleterespons(index,indexM)}        className={`delete-responsibility-button delete-responsibility-button-${indexM}`}>
                          Delete
                         </button>
                     </div>
        
                    ))}
                     <div className={`resbtn resbtn-${indexM}`}>
                           <button type="button" onClick={()=>addpoint(indexM)} className={`add-responsibility-button-${indexM}`}>
                              Add Responsibility
                           </button>
                     </div>
                </div>
            ))}
                      <button type="button" className="save add-experience-button" onClick={addwork}>
                        Add Work Experience
                      </button>
                      <button className="save">Save and Contiue</button>
        </>
        }
   </>)
}
export default Experience;