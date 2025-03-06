import React, {  useState  } from "react";
import "../../style/resume1.css";
import Resumeoptions from "./resumeoptions";
import { usePDF } from 'react-to-pdf';
import html2canvas from "html2canvas";


function Resume_c1(props){
  //console.log(props.font_family, props.wholeuserinfosend);
  const userinfo=props.wholeuserinfosend;
  const font=props.font_family;
  const [personalinfo,experience,education,certification_info,project,skill]=userinfo;
  const [backbtn,setback]=useState(false);//to go back
  const { toPDF, targetRef } = usePDF({filename: 'resume.pdf'});
 
  //go back to resumeselection
  function goback(){
    setback(true);
  }
  const handleDownloadImage = async() => {
    const element = document.getElementById('print'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jpg'),
    link = document.createElement('a');

    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return(<>
      {backbtn ? <Resumeoptions wholeuserinfosend={userinfo}/> :(
      <>
      <div className="buttons">
      <button className="back-btn" onClick={goback}>Back</button>
      <button className="downloadbtn" onClick={() => toPDF()}>Download PDF</button>
      <button className="downloadbtn" type="button" onClick={handleDownloadImage}>Download JPG</button>
      
    </div>
        <div className="resume1" id="print" style={{fontFamily:`${font}`}} ref={targetRef}>
        <div className="resume1-header">
          <h1 className="resume1-name">{personalinfo.name.toUpperCase()}</h1>
          <p className="resume1-title">{personalinfo.profession.charAt(0).toUpperCase()+ personalinfo.profession.slice(1)}</p>
          <div className="resume1-contact-info">
            <p className="resume1-contact-item">{personalinfo.email}</p>
            <p className="resume1-contact-item">{personalinfo.phone}</p>
            <p className="resume1-contact-item">{personalinfo.linkedin}</p>
          </div>
        </div>
  
        <div className="resume1-main-content">
          <div className="resume1-left-section">
            <div className="resume1-summary">
              <h2>SUMMARY</h2>
              <p>{personalinfo.summary.charAt(0).toUpperCase()+personalinfo.summary.slice(1)}</p>
            </div>
  
             <div className="resume1-experience" >
              {experience.length!==0?
              <h2>EXPERIENCE</h2>:""}
             
              {/* to check if user has skipped experience or not -----------------------------------> */}
              {experience.length!==0?experience.map((experience_loop,index) => (
               
              <div className={`resume1-job ` } key={`exp-${index}`}>
              <h3>{experience_loop.title.charAt(0).toUpperCase()+experience_loop.title.slice(1)}</h3>
                <p className="resume1-company">{experience_loop.company.charAt(0).toUpperCase()+experience_loop.company.slice(1)} - {experience_loop.date}</p>
                
                 {/* chechking if responsibility exi+st or not */}
                 {experience_loop.responsibility.length!=0?experience_loop.responsibility.map((responsibilities,index)=>(

                <ul className="resume1_expereience_list" key={`responsibilti-${index}`}>
                  <li>
                  {responsibilities.charAt(0).toUpperCase()+responsibilities.slice(1)}
                  </li>
                 
                </ul>) )
                :""}
              </div>  
             ))
              :""}
               </div>

              
               <div className="resume1-projects">
               {project.length!==0?
              <h2>PROJECTS</h2>:""}
              {project.length!==0?project.map((projects,index)=>(
               <div className="resume1-project" key={`project-${index}`}>
                <h3>{projects.project_name.charAt(0).toUpperCase()+projects.project_name.slice(1)} - {projects.project_date}</h3>
                <p>{projects.project_description.charAt(0).toUpperCase()+projects.project_description.slice(1)}</p>
              </div>
              )):""}
             
              
            </div>
          </div>
      
          <div className="resume1-right-section">
            <div className="resume1-education" >
           {education.length!=0?
              <h2>EDUCATION</h2>:""}

           {education.length!=0?
              education.map((educations,index)=>(
              <div className="resume1-edu" key={`education-${index}`}>
                <h3>{educations.education.charAt(0).toUpperCase()+educations.education.slice(1)}</h3>
                <p className="resume1-university">{educations.university.charAt(0).toUpperCase()+educations.university.slice(1)} - {educations.graduationdate}</p>
                
              </div>
            
            )):""}
          </div>
             
          <div className="resume1-certification">
            {certification_info.length!==0?
              <h2>CERTIFICATION</h2>:""}
            {certification_info.length!==0?certification_info.map((certificates,index)=>(
                  <div className="resume1-cert" key={`certificate-${index}`}>
                  <h3>{certificates.certificate_name.charAt(0).toUpperCase()+certificates.certificate_name.slice(1)} </h3>
                  <p className="resume1-organization">{certificates.certificate_organization.charAt(0).toUpperCase()+certificates.certificate_organization.slice(1)} - {certificates.certificate_date}</p>
                 
                   </div>
             )):""}
            </div> 

            <div className="resume1-skills">
            {skill.length!==0?
              <h2>SKILLS</h2>:""}
              <div className="resume1-skills-list">
              {skill.length!==0?skill.map((skills,index)=>(
                
              <ul key={`skills-${index}`}>
                <li>{skills.skill_name.charAt(0).toUpperCase()+skills.skill_name.slice(1)}</li>
               
              </ul>)):""}
            </div></div>
  
           
          </div>
        </div>
      </div>
    </>)}</>
    )
    
}
export default Resume_c1;