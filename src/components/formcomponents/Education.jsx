import React, { useEffect, useState } from "react";
import Experience from "./Experience.";
import Certification from "./certification";

//user will enter its education and this is called when user has entered it experience
function Education(props) {
  //console.log(props.wholeuserinfosend);
  
  const [addeducation, setaddeducation] = useState([
    { education: "", university: "", graduationdate: "" },
  ]);
  const [back, setback] = useState(false);
  const [save, setsave] = useState(false);

  useEffect(() => {
    //console.log(props.wholeuserinfosend);
       if (props.wholeuserinfosend[2]) {//chaekin whether experience exists before or not
         setaddeducation(props.wholeuserinfosend[2]);
       }
     }, [props.wholeuserinfosend]);
  
  //back button pressed
  function goback() {
    props.wholeuserinfosend[2]?props.wholeuserinfosend[2]=addeducation:
    props.wholeuserinfosend.push(addeducation);
    console.log((props.wholeuserinfosend));
    setback(true);
  }
  //this will add the education
  function addeduc() {
    const educopy = [...addeducation];
    educopy.push({ education: "", university: "", graduationdate: "" });
    setaddeducation(educopy);
  }
  //delete education
  function deleteEducation(indexM) {
    const educopy = [...addeducation];
    educopy.splice(indexM, 1);
    setaddeducation(educopy);
  }
  //save and continue to certification section
  function tocertification() {
    props.wholeuserinfosend[2]?props.wholeuserinfosend[2]=addeducation:
    props.wholeuserinfosend.push(addeducation);
    setsave(true);
  }

  return (
    <>
      {save ? (
        <>
          <Certification  wholeuserinfosend={props.wholeuserinfosend}/>
        </>
      ) : (
        <>
          {back ? (
            <>
              <Experience  wholeuserinfosend={props.wholeuserinfosend}/>
            </>
          ) : (
            <>
              {addeducation.map((addeducations, index) => (
                <div
                  className={`education-section education-section-${index}`}
                  key={index}
                >
                  {index === 0 && (
                    <>
                      <button
                        className={`back-button-${index} back-button`}
                        onClick={goback}
                      >
                        Back
                      </button>
                    </>
                  )}
                  {index > 0 && (
                    <>
                      <button
                        className="deleteeducation"
                        onClick={() => deleteEducation(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}{" "}
                  <h2>Education Details {index + 1}</h2>
                  <div className={`input-group-${index} input-group`}>
                    <label htmlFor={`education-${index} education`}>
                      Education:
                    </label>
                    <input
                      type="text"
                      id={`education-${index} education`}
                      name={`education-${index} education`}
                      placeholder="Enter your education"
                      value={addeducations.education || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatededucation = [...addeducation];
                          updatededucation[index].education = e.target.value; // Update the specific title
                          setaddeducation(updatededucation); // Update the state
                        }}
                    />
                  </div>
                  <div className={`input-group-${index} input-group`}>
                    <label htmlFor={`university-${index} university`}>
                      University:
                    </label>
                    <input
                      type="text"
                      id={`university-${index} university`}
                      name={`university-${index} university`}
                      placeholder="Enter your university name"
                      value={addeducations.university || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatededucation = [...addeducation];
                          updatededucation[index].university = e.target.value; // Update the specific title
                          setaddeducation(updatededucation); // Update the state
                        }}
                    />
                  </div>
                  <div className={`input-group-${index} input-group`}>
                    <label
                      htmlFor={`graduation-date-${index} graduation-date `}
                    >
                      Graduation Year:
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="YYYY"
                      pattern="\d{4}"
                      id={`graduation-date-${index} graduation-date`}
                      name={`graduation-date-${index} graduation-date`}
                      value={addeducations.graduationdate || ""} // Ensure value is controlled
                        onChange={(e) => {
                          const updatededucation = [...addeducation];
                          updatededucation[index].graduationdate = e.target.value; // Update the specific title
                          setaddeducation(updatededucation); // Update the state
                        }}
                    />
                  </div>
                </div>
              ))}
              <div className="button-group">
                <button
                  type="button"
                  className="add-education-button"
                  onClick={addeduc}
                >
                  Add Education
                </button>
                <button
                  type="button"
                  className="save-education-button"
                  onClick={tocertification}
                >
                  Save
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
export default Education;
