import React, { useState } from "react";
import Experience from "./Experience.";
import Certification from "./certification";

//user will enter its education and this is called when user has entered it experience
function Education() {
  const [addeducation, setaddeducation] = useState([
    { education: "", university: "", graduationdate: "" },
  ]);
  const [back, setback] = useState(false);
  const [save, setsave] = useState(false);

  //back button pressed
  function goback() {
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
    setsave(true);
  }

  return (
    <>
      {save ? (
        <>
          <Certification />
        </>
      ) : (
        <>
          {back ? (
            <>
              <Experience />
            </>
          ) : (
            <>
              {addeducation.map((_, index) => (
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
                      <h2>Education Details</h2>
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
                  )}
                  <div className={`input-group-${index} input-group`}>
                    <label htmlFor={`education-${index} education`}>
                      Education:
                    </label>
                    <input
                      type="text"
                      id={`education-${index} education`}
                      name={`education-${index} education`}
                      placeholder="Enter your education"
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
