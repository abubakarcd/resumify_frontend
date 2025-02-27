import React from "react";
import "../../style/resume1.css";

function Resume_c1(){
    return(
        <div className="resume1">
        <div className="resume1-header">
          <h1 className="resume1-name">Riley Nelson</h1>
          <p className="resume1-title">Java/Web Application Developer | Oracle Backend Specialist</p>
          <div className="resume1-contact-info">
            <p className="resume1-contact-item">@help@enhancv.com</p>
            <p className="resume1-contact-item">linkedin.com</p>
            <p className="resume1-contact-item">Los Angeles, California</p>
          </div>
        </div>
  
        <div className="resume1-main-content">
          <div className="resume1-left-section">
            <div className="resume1-summary">
              <h2>SUMMARY</h2>
              <p>Expert full-stack Java developer with over 5 years' experience in Java EE development with Oracle backend. Skilled in a plethora of technologies like JSF, Angular, Hibernate, and Tomcat with a proven track record of project delivery. Excited to bring thorough problem resolution, effective team collaboration, and high attention to detail to deliver efficiently.</p>
            </div>
  
            <div className="resume1-experience">
              <h2>EXPERIENCE</h2>
              <div className="resume1-job">
                <h3>Mid-Level Java/Web Application Developer</h3>
                <p className="resume1-company">Techify Inc.</p>
                <p className="resume1-dates-location">2020 - Present | Los Angeles, CA</p>
                <p>Frontend and backend development of enterprise-grade web applications.</p>
                <p>Collaborated with a team of developers to design and deploy highly efficient Java EE applications, improving application response time by 25%.</p>
              </div>
              <div className="resume1-job">
                <h3>Java Developer</h3>
                <p className="resume1-company">Innotech Solutions</p>
                <p className="resume1-dates-location">2017 - 2020 | Los Angeles, CA</p>
                <p>Frontend and backend development of enterprise-grade web applications.</p>
                <p>Collaborated with a team of developers to design and deploy highly efficient Java EE applications, improving application response time by 25%.</p>
              </div>
            </div>
  
            <div className="resume1-education">
              <h2>EDUCATION</h2>
              <div className="resume1-edu">
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="resume1-university">California State University, Los Angeles</p>
                <p className="resume1-dates-location">2011 - 2015 | Los Angeles, CA</p>
              </div>
              <div className="resume1-edu">
                <h3>Master of Computer Science</h3>
                <p className="resume1-university">University of California, Los Angeles</p>
                <p className="resume1-dates-location">2016 - 2017 | Los Angeles, CA</p>
              </div>
            </div>
          </div>
  
          <div className="resume1-right-section">
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
  
            <div className="resume1-skills">
              <h2>SKILLS</h2>
              <p className="resume1-skill-list">Java EE | Oracle | JSF | JSP | Struts</p>
              <p className="resume1-skill-list">Hibernate | Spring | JavaScript | jQuery</p>
              <p className="resume1-skill-list">Angular6+ | AngularJS | TypeScript</p>
              <p className="resume1-skill-list">Restful Webservices | Tomcat | JBoss</p>
              <p className="resume1-skill-list">Git | Maven | SQL | XML</p>
              <p className="resume1-skill-list">Agile methodologies</p>
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