import React, { useEffect, useState } from "react";
import Projects from "./projects";
import Education from "./Education";

function Certification(props) {
  //props.wholeuserinfosend (main array which has all infos)
  const [save, setsave] = useState(false);
  const [back, setback] = useState(false);
  const [certificate, setcertificate] = useState([
    {
      certificate_name: "",
      certificate_organization: "",
      certificate_date: "",
    },
  ]);
  useEffect(() => {
      //console.log(props.wholeuserinfosend);
         if (props.wholeuserinfosend[3]) {//checkin whether certificate exists before or not
           setcertificate(props.wholeuserinfosend[3]);
         }
       }, [props.wholeuserinfosend]);
  //save and continue to projects
  function toprojects() {
    props.wholeuserinfosend[3]?props.wholeuserinfosend[3]=certificate:
    props.wholeuserinfosend.push(certificate);
    setsave(true);
  }

  //add certification
  function addcertification() {
    const certificatecopy = [...certificate];
    certificatecopy.push({
      certificate_name: "",
      certificate_organization: "",
      certificate_date: "",
    });
    setcertificate(certificatecopy);
  }
  //delete certificate
  function deletecertificate(indexM) {
    const certificatecopy = [...certificate];
    certificatecopy.splice(indexM, 1);
    setcertificate(certificatecopy);
  }

  //back button pressed to go back to education
  function goback() {
    props.wholeuserinfosend[3]?props.wholeuserinfosend[3]=certificate:
    props.wholeuserinfosend.push(certificate);
    console.log(props.wholeuserinfosend);
    
    setback(true);
  }

  return (
    <>
      {save ? (
        <>
          <Projects wholeuserinfosend={props.wholeuserinfosend}/>
        </>
      ) : (
        <>
          {back ? (
            <>
              <Education wholeuserinfosend={props.wholeuserinfosend} />
            </>
          ) : (
            <>
              <div className="certification-form-container">
                <form className="certification-form" onSubmit={toprojects}>
                  {certificate.map((certificates, index) => (
                    
                      <div className="main" key={`certification-${index}`}>
                        <div className={`form-header form-header-${index}`}>
                          <h2>Certification Details {index + 1}</h2>
                          {index === 0 && (
                            <button className="back-button" onClick={goback}>
                              Back
                            </button>
                          )}
                          {index > 0 && (
                            <button
                              className="del"
                              onClick={() => deletecertificate(index)}
                            >
                              Delete
                            </button>
                          )}
                        </div>

                        <div className={`1input-group name-${index}`}>
                          <label htmlFor={`certification-name-${index}`}>
                            Certification Name:
                          </label>
                          <input
                            type="text"
                            id={`certificate_name-${index} certificate_name`}
                            name={`name-${index} certificate_name`}
                            placeholder="Enter the certification name"
                            value={certificates.certificate_name || ""}
                            onChange={(e)=>{
                              const updatedcertificate = [...certificate];
                              updatedcertificate[index].certificate_name = e.target.value; 
                              setcertificate(updatedcertificate); }}

                          />
                        </div>

                        <div className={`input-group organization-${index}`}>
                          <label htmlFor={`organization-${index}`}>
                            Organization:
                          </label>
                          <input
                            type="text"
                            id={`certificate_organization-${index} certificate_organization`}
                            name={`certificate_organization-${index} certificate_organization`}
                            placeholder="Enter the organization name"
                            value={certificates.certificate_organization || ""}
                            onChange={(e)=>{
                              const updatedcertificate = [...certificate];
                              updatedcertificate[index].certificate_organization = e.target.value; 
                              setcertificate(updatedcertificate); }}
                          />
                        </div>

                        <div className={`input-group date-${index}`}>
                          <label htmlFor={`date-${index}`}>
                            Date of Certification:
                          </label>
                          <input
                            type="text"
                            maxLength={4}
                            placeholder="YYYY"
                            pattern="\d{4}"
                            id={`certificate_date-${index} certificate_date`}
                            name={`certificate_date-${index} certificate_date`}
                            value={certificates.certificate_date || ""}
                            onChange={(e)=>{
                              const updatedcertificate = [...certificate];
                              updatedcertificate[index].certificate_date = e.target.value; 
                              setcertificate(updatedcertificate); }}
                          />
                        </div>
                      </div>
                    
                  ))}
                  <div className={`button-group-certification `}>
                    <button
                      type="button"
                      className={`add-button `}
                      onClick={addcertification}
                    >
                      Add Certification
                    </button>

                    <button className="save-button" type="submit">
                      Save
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
export default Certification;
