import React, { useEffect, useState } from "react";
import "../../style/form.css";
import Info from "./info";
import Education from "./Education";

//experience of user
//1. User will enter its experience
function Experience(props) {
  
  const [back, setback] = useState(false);
  const [work, setwork] = useState([
    { title: "", company: "", date: "", responsibility: [] },
  ]);
  //when back from education this will keep the info 
 useEffect(() => {
  //console.log(props.wholeuserinfosend);
     if (props.wholeuserinfosend[1]) {//chaekin whether experience exists before or not
       setwork(props.wholeuserinfosend[1]);
     }
   }, [props.wholeuserinfosend]);

  const [education, seteducation] = useState(false);
  //go back to home page
  function goback() {
    props.wholeuserinfosend[1]?props.wholeuserinfosend[1]=work:
    props.wholeuserinfosend.push(work);
    console.log(props.wholeuserinfosend);
    setback(true);
  }

  //add point for responsibility
  function addpoint(indexM) {
    const workcopy = [...work];
    workcopy[indexM].responsibility.push("");
    setwork(workcopy);
  }
  //delete responsiblity
  function deleterespons(index, indexM) {
    const workcopy = [...work];
    workcopy[indexM].responsibility.splice(index, 1);
    setwork(workcopy);
  }

  //add work experience. 1. this will add the work experience input when add expereience button is pressed
  function addwork() {
    //console.log(work);
    const workcopy = [...work];
    workcopy.push({ title: "", company: "", date: "", responsibility: [] });
    setwork(workcopy);
  }
  //delete work experience
  function deletework(indexM) {
    const workcopy = [...work];
    workcopy.splice(indexM, 1);
    setwork(workcopy);
  }

  //save and continue to education
  function toeducation(e) {

    e.preventDefault();
    console.log(e.target.name);
    props.wholeuserinfosend[1]?props.wholeuserinfosend[1]=work:
    props.wholeuserinfosend.push(work);
    console.log(props.wholeuserinfosend);
    seteducation(true);
  }
  //skip experience
  function skip(){
    props.wholeuserinfosend[1]?props.wholeuserinfosend[1]=[]:
    props.wholeuserinfosend.push([]);
    console.log(work, props.wholeuserinfosend)
    seteducation(true);
  }


  return (
    <>
      {education ? (
        <>
          <Education wholeuserinfosend={props.wholeuserinfosend}/>
        </>
      ) : (
        <>
          {back ? (
            <>
              <Info wholeuserinfoback={props.wholeuserinfosend}/>
            </>
          ) : (
            <>
              <form onSubmit={toeducation}>
                {work.map((workentry, indexM) => (
                  <div
                    className={` experience-section experience-section-${indexM}`}
                    key={indexM}
                  >
                    <div
                      className={` resume-header resume-header-${indexM} exp`}
                    >
                      <h2>Experience {indexM + 1}</h2>
                      {indexM > 0 && (
                        <button
                          className="deletework"
                          onClick={() => deletework(indexM)}
                        >
                          Delete
                        </button>
                      )}
                      {indexM == 0 && (
                        <button className="back-button" onClick={goback}>
                          Back
                        </button>
                      )}
                    </div>

                    <div className={` input-group input-group-${indexM}`}>
                      <label htmlFor={`title title-${indexM}`}>Title:</label>
                      <input
                        type="text"
                        id={`title-${indexM}`}
                        name={`title-${indexM}`}
                        placeholder="Enter your job title"
                        value={workentry.title || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatedWork = [...work];
                          updatedWork[indexM].title = e.target.value; // Update the specific title
                          setwork(updatedWork); // Update the state
                        }}
                      />
                    </div>

                    <div className={`input-group input-group-${indexM}`}>
                      <label htmlFor={`company-${indexM}`}>Company Name:</label>
                      <input
                        type="text"
                        id={`company-${indexM} company`}
                        name={`company-${indexM} company`}
                        placeholder="Enter company name"
                        value={workentry.company || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatedWork = [...work];
                          updatedWork[indexM].company = e.target.value; // Update the specific company
                          setwork(updatedWork); // Update the state
                        }}
                      />
                    </div>

                    <div className={`input-group input-group-${indexM}`}>
                      <label htmlFor={`date-${indexM}`}>Date:</label>
                      <input
                        type="text"
                        id={`date-${indexM} date`}
                        name={`date-${indexM} date`}
                        placeholder="Enter date (e.g., Jan 2020 - Dec 2022)"
                        value={workentry.date || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatedWork = [...work];
                          updatedWork[indexM].date = e.target.value; // Update the specific date
                          setwork(updatedWork); // Update the state
                        }}
                      />
                    </div>
                    {work[indexM].responsibility.map((_, index) => (
                      <div
                        key={index}
                        className={`input-group input-group-${indexM}`}
                      >
                        <label htmlFor={`responsibility-${index}-${indexM}`}>
                          Responsibility:
                        </label>
                        <input
                          type="text"
                          id={`responsibility-${index}-${indexM} responsibility`}
                          name={`responsibility-${index}-${indexM} responsibility`}
                          placeholder="Enter a responsibility"
                          value={workentry.responsibility[index] || ""} // Ensure value is controlled
                          onChange={(e) => {
                            const updatedWork = [...work];
                            updatedWork[indexM].responsibility[index]= e.target.value ; // Update the specific responsibilty
                            setwork(updatedWork); // Update the state
                          }}
                        />

                        <button
                          type="button"
                          onClick={() => deleterespons(index, indexM)}
                          className={`delete-responsibility-button delete-responsibility-button-${indexM}`}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                    <div className={`resbtn resbtn-${indexM}`}>
                      <button
                        type="button"
                        onClick={() => addpoint(indexM)}
                        className={`add-responsibility-button-${indexM} save`}
                      >
                        Add Responsibility
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="save add-experience-button"
                  onClick={addwork}
                >
                  Add Work Experience
                </button>
                <button className="save" type="submit">
                  Save and Contiue
                </button>
                <button className="skip save"  type="button" onClick={skip}>
                  Skip and continue
                </button>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Experience;
