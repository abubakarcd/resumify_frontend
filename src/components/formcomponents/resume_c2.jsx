import React ,{useState} from "react";
import "../../style/resume_c2.css"
import Resumeoptions from "./resumeoptions";
import { usePDF } from 'react-to-pdf';
import html2canvas from "html2canvas";

function Resume_c2(props){
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
        <div className="resume_c2_resume-container " id="print" style={{fontFamily:`${font}`}}  ref={targetRef}> {/* Added the specific class name */}
            <header>
                <h1>{personalinfo.name.toUpperCase()}</h1>
                <h2>{personalinfo.profession.charAt(0).toUpperCase()+ personalinfo.profession.slice(1)}</h2>
                <div className="resume1-contact-info">
            <p className="resume1-contact-item">{personalinfo.email}</p>
            <p className="resume1-contact-item">{personalinfo.phone}</p>
            <p className="resume1-contact-item">{personalinfo.linkedin}</p>
          </div>
            </header>

            <section className="summary">
                <h3>Summary</h3>
                <p>
                {personalinfo.summary.charAt(0).toUpperCase()+personalinfo.summary.slice(1)}
                </p>
            </section>

            <section className="experience">
            {experience.length!==0?
             <h3>Professional Experience</h3> :""}
                
              {/* to check if user has skipped experience or not -----------------------------------> */}
              {experience.length!==0?experience.map((experience_loop,index) => (
                <div className="job" key={`exp2-${index}`}>
                    <h5>{experience_loop.title.charAt(0).toUpperCase()+experience_loop.title.slice(1)}</h5>
                    <p className="job-details">{experience_loop.company.charAt(0).toUpperCase()+experience_loop.company.slice(1)} - {experience_loop.date}</p>
                     {/* chechking if responsibility exi+st or not */}
                 {experience_loop.responsibility.length!=0?experience_loop.responsibility.map((responsibilities,index)=>(

                    <ul key={`responsibilti-${index}`}>
                         <li>
                  {responsibilities.charAt(0).toUpperCase()+responsibilities.slice(1)}
                  </li>
                    </ul>
                    ) )
                    :""}
                </div>

                ))
              :""}
            </section>

            
            {/* Projects Section (Displayed in Horizontal Line) */}
            <section className="projects">
            {project.length!==0?
              <h3>PROJECTS</h3>:""}
                <div className="projects-container">
                {project.length!==0?project.map((projects,index)=>(
                    <div className="project" key={`project-${index}`}>
                        <h5>{projects.project_name.charAt(0).toUpperCase()+projects.project_name.slice(1)} - {projects.project_date}</h5>
                        <p>{projects.project_description.charAt(0).toUpperCase()+projects.project_description.slice(1)}</p>

                    </div>
                    )):""}

                </div>
            </section>

            <section className="education">
            {education.length!=0?
              <h3>EDUCATION</h3>:""}

              { education.length!=0?
              education.map((educations,index)=>(
                <div className="edu-item" key={`education-${index}`}>
                <h5 className="edu-degree">{educations.education.charAt(0).toUpperCase()+educations.education.slice(1)}</h5>
                <p className="edu-details">{educations.university.charAt(0).toUpperCase()+educations.university.slice(1)} - {educations.graduationdate}</p>
                
              </div>
            )):""}
           </section>

           <section className="certification">
            
           {certification_info.length!==0?
              <h3>CERTIFICATION</h3>:""}
            {certification_info.length!==0?certification_info.map((certificates,index)=>(
                  <div className="resume2-cert" key={`certificate-${index}`}>
                  <h5>{certificates.certificate_name.charAt(0).toUpperCase()+certificates.certificate_name.slice(1)} </h5>
                  <p className="resume2-organization">{certificates.certificate_organization.charAt(0).toUpperCase()+certificates.certificate_organization.slice(1)} - {certificates.certificate_date}</p>
                 
                   </div>
             )):""}
           </section>

            <section className="skills">
            {skill.length!==0?
              <h3>TECHNICAL SKILLS</h3>:""}
              <ul >
               {skill.length!==0?skill.map((skills,index)=>(
                
                <li key={`skills-${index}`}>{skills.skill_name.charAt(0).toUpperCase()+skills.skill_name.slice(1)}</li>
               
              )):""}</ul>
            </section>
        </div>
        </>
    )
}</>)}
export default Resume_c2;