import React, { useState } from "react";
import "../../style/resume3.css";
import Resumeoptions from "./resumeoptions";
import { usePDF } from "react-to-pdf";
import html2canvas from "html2canvas";

function Resume_c3(props) {
  const userinfo = props.wholeuserinfosend;
  const font = props.font_family;
  const [
    personalinfo,
    experience,
    education,
    certification_info,
    project,
    skill,
  ] = userinfo;
  const [backbtn, setback] = useState(false); //to go back
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

  //go back to resumeselection
  function goback() {
    setback(true);
  }
  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {backbtn ? (
        <Resumeoptions wholeuserinfosend={userinfo} />
      ) : (
        <>
          <div className="buttons">
            <button className="back-btn" onClick={goback}>
              Back
            </button>
            <button className="downloadbtn" onClick={() => toPDF()}>
              Download PDF
            </button>
            <button
              className="downloadbtn"
              type="button"
              onClick={handleDownloadImage}
            >
              Download JPG
            </button>
          </div>
          <div className="resume_c3_resume">
            <div
              className="resume_c3_content"
              style={{ fontFamily: `${font}` }}
              ref={targetRef}
            >
              <div className="resume_c3_left-column">
                <div className="resume_c3_header">
                  <h1>{personalinfo.name.toUpperCase()}</h1>
                  <p>
                    {personalinfo.profession.charAt(0).toUpperCase() +
                      personalinfo.profession.slice(1)}
                  </p>
                  <div className="resume_c3_contact-info">
                    <span>{personalinfo.phone}</span>
                    <span>{personalinfo.email}</span>
                    <span>{personalinfo.linkedin}</span>
                  </div>
                </div>
                <section className="resume_c3_summary">
                  <h2>SUMMARY</h2>
                  <p>
                    {personalinfo.summary.charAt(0).toUpperCase() +
                      personalinfo.summary.slice(1)}
                  </p>
                </section>

                <section className="resume_c3_experience">
                  {experience.length !== 0 ? (
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                  ) : (
                    ""
                  )}
                  {/* to check if user has skipped experience or not -----------------------------------> */}
                  {experience.length !== 0
                    ? experience.map((experience_loop, index) => (
                        <div className="resume_c3_job" key={`exp-${index}`}>
                          <h3>
                            {experience_loop.title.charAt(0).toUpperCase() +
                              experience_loop.title.slice(1)}
                          </h3>
                          <p>
                            {experience_loop.company.charAt(0).toUpperCase() +
                              experience_loop.company.slice(1)} 
                            <span className="resume_c3_right">
                               {experience_loop.date}
                            </span>
                          </p>

                          {/* chechking if responsibility exist or not */}
                          {experience_loop.responsibility.length != 0
                            ? experience_loop.responsibility.map(
                                (responsibilities, index) => (
                                  <ul key={`responsibilti-${index}`}>
                                    <li>
                                      {responsibilities
                                        .charAt(0)
                                        .toUpperCase() +
                                        responsibilities.slice(1)}
                                    </li>
                                  </ul>
                                )
                              )
                            : ""}
                        </div>
                      ))
                    : ""}
                </section>

                <section className="resume_c3_achievements">
                  {project.length !== 0 ? <h2>PROJECTS</h2> : ""}
                  <div className="resume_c3_achievement-row">
                    {project.length !== 0
                      ? project.map((projects, index) => (
                          <div
                            className="resume_c3_achievement"
                            key={`project-${index}`}
                          >
                            <h3>
                              {projects.project_name.charAt(0).toUpperCase() +
                                projects.project_name.slice(1)}{" "}
                              - {projects.project_date}
                            </h3>
                            <p>
                              {projects.project_description
                                .charAt(0)
                                .toUpperCase() +
                                projects.project_description.slice(1)}
                            </p>
                          </div>
                        ))
                      : ""}
                  </div>
                </section>
              </div>

              <div className="resume_c3_right-column">
                <section className="resume_c3_skills">
                  {skill.length !== 0 ? <h2>TECHNICAL SKILLS</h2> : ""}
              <ul
                          className="resume_c3_skillsul"
                          
                        >
                  {skill.length !== 0
                    ? skill.map((skills, index) => (
                      
                          <li>
                            {skills.skill_name.charAt(0).toUpperCase() +
                              skills.skill_name.slice(1)}
                          </li>
                        
                      ))
                    : ""}
                    </ul>
                </section>

                <section className="resume_c3_education">
                  {education.length != 0 ? <h2>EDUCATION</h2> : ""}
                  {education.length != 0
                    ? education.map((educations, index) => (
                        <div className="resume_c3_degree">
                          <h3>
                            {educations.education.charAt(0).toUpperCase() +
                              educations.education.slice(1)}
                          </h3>
                          <p className="resume1-university">
                            {educations.university.charAt(0).toUpperCase() +
                              educations.university.slice(1)} - {educations.graduationdate}
                          </p>
                          
                        </div>
                      ))
                    : ""}
                </section>

                <section className="resume_c3_certificates">
                  {certification_info.length !== 0 ? (
                    <h2>CERTIFICATIONS</h2>
                  ) : (
                    ""
                  )}
                  {certification_info.length !== 0
                    ? certification_info.map((certificates, index) => (
                        <div className="resume_c3_certificate">
                          <h3>
                            {certificates.certificate_name
                              .charAt(0)
                              .toUpperCase() +
                              certificates.certificate_name.slice(1)}{" "}
                          </h3>
                          <p>
                            {certificates.certificate_organization
                              .charAt(0)
                              .toUpperCase() +
                              certificates.certificate_organization.slice(
                                1
                              )}{" "}
                            - {certificates.certificate_date}
                          </p>
                        </div>
                      ))
                    : ""}
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Resume_c3;
