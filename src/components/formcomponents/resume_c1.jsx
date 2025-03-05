import React, { useEffect, useState } from "react";
import "../../style/resume1.css";

function Resume_c1(props){
  //console.log(props.font_family, props.wholeuserinfosend);
  const userinfo=props.wholeuserinfosend;
  const [personalinfo,experience,education,b,c,d]=userinfo;
    return(
        <div className="resume1">
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
               
              <div className={`resume1-job exp-${index}` }>
              <h3>{experience_loop.title}</h3>
                <p className="resume1-company">{experience_loop.company}</p>
                <p className="resume1-dates-location">{experience_loop.date} </p>
                 {/* chechking if responsibility exi+st or not */}
                 {experience_loop.responsibility.length!=0?experience_loop.responsibility.map((responsibilities,index)=>(

                <ul className="resume1_expereience_list">
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
              <h2>PROJECTS</h2>
              <div className="resume1-project">
                <h3>E-commerce Platform (Java EE)</h3>
                <p>Developed a scalable e-commerce platform using Java EE, Hibernate, and Oracle database. Implemented RESTful APIs for product management and order processing.</p>
              </div>
              <div className="resume1-project">
                <h3>Data Analytics Dashboard (Angular)</h3>
                <p>Created an interactive data analytics dashboard using Angular 6+ to visualize key performance indicators and generate reports.</p>
              </div>
              <div className="resume1-project">
                <h3>Mobile App Backend (Spring Boot)</h3>
                <p>Designed and built a robust backend for a mobile application using Spring Boot, focusing on user authentication and data synchronization.</p>
              </div>
            </div>
          </div>
      
          <div className="resume1-right-section">
            <div className="resume1-education" >
           {education.length!=0?
              <h2>EDUCATION</h2>:""}

           {education.length!=0?
              education.map((educations,index)=>(
              <div className="resume1-edu" key={index}>
                <h3>{educations.education}</h3>
                <p className="resume1-university">{educations.university}</p>
                <p className="resume1-dates-location">{educations.graduationdate}</p>
              </div>
            
            )):""}
          </div>
  
            <div className="resume1-skills">
              <h2>SKILLS</h2>
              <ul>
                <li>Java EE</li>
                <li>Hibernate</li>
                <li>Angular6+</li>
                <li>Restful Webservices</li>
                <li>Git</li>
                <li>Agile methodologies</li>
              </ul>
            </div>
  
            <div className="resume1-certification">
              <h2>CERTIFICATION</h2>
              <div className="resume1-cert">
                <h3>Java and Java EE Programming</h3>
                <p>An intensive course offered by Oracle University focusing on Java and Java EE.</p>
              </div>
              <div className="resume1-cert">
                <h3>XML and XML Parsers</h3>
                <p>A specialized course by the University of California, Berkeley Extension focusing on extensive XML and XML parsers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}
export default Resume_c1;