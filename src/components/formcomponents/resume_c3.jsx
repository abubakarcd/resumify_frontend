import React from "react";
import "../../style/resume3.css";

function Resume_c3() {
  return (
    <div className="resume_c3_resume">
      <div className="resume_c3_content">
        <div className="resume_c3_left-column">
          <div className="resume_c3_header">
            <h1>JOHNATAN WRIGHT</h1>
            <p>Product Manager Inspired by Innovation</p>
            <div className="resume_c3_contact-info">
              <span>+1-785-112-8512</span>
              <span>alexmurphy@gmail.com</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
          <section className="resume_c3_summary">
            <h2>SUMMARY</h2>
            <p>
              Result-oriented product manager with 8 years of experience in
              developing unique software products. Excelled in scrum, product
              design, and data analysis to reach optimal product quality. A fast
              and eager learner, detail-oriented, and adapted to changing
              project requirements quickly to meet business goals. Seeking to
              join Google and bringing innovative products to a broader
              audience.
            </p>
          </section>

          <section className="resume_c3_experience">
            <h2>PROFESSIONAL EXPERIENCE</h2>

            <div className="resume_c3_job">
              <h3>Product Manager</h3>
              <p>
                Intel <span className="resume_c3_right">2020 - 2022</span>
              </p>
              <ul>
                <li>
                  Managed over 2 large delivery projects with a maximum team
                  size of over 50+ (onsite/offshore)
                </li>
                <li>
                  Successfully implemented a faster process for new feature
                  ideation, validation, design, development and revenue
                  generation
                </li>
                <li>
                  Worked with a team of 30+ on the development on Intel Xeon
                  Scalable Processors
                </li>
                <li>
                  Executed innovative strategy and product roadmap based on
                  financial projections, customer feedback, and market
                  competition
                </li>
              </ul>
            </div>

            <div className="resume_c3_job">
              <h3>Senior Software Engineer</h3>
              <p>
                Samsung <span className="resume_c3_right">2019 - 2020</span>
              </p>

              <ul>
                <li>
                  Handled team of 10 people consisting of offshore & onsite
                </li>
                <li>
                  Designed and developed a tool that reduced production time by
                  25% directly preventing a quarterly loss
                </li>
                <li>
                  Worked closely on 2 projects with development team to write
                  test plans for quality assurance
                </li>
                <li>
                  Together with a team of 7 developed 5 backend PL/SQL
                  procedures, packages, and functions for Cognos (BI) Report
                </li>
              </ul>
            </div>

            <div className="resume_c3_job">
              <h3>Software Engineer</h3>
              <p>
                Microsoft <span className="resume_c3_right">2014 - 2020</span>
              </p>

              <ul>
                <li>
                  Optimized the network stack, reducing the initial connection
                  latency by 33%
                </li>
                <li>
                  Improved the performance of the migration tool by 53% by
                  applying efficient data processing techniques
                </li>
                <li>
                  Reduced room usage analytics computation time (in an internal
                  tool) by 37% by logic refactoring and elimination of incurred
                  technical debts
                </li>
                <li>
                  Rated with the best annual performance rating for all the
                  years during my stint; given to top ~5% employees
                </li>
                <li>
                  Developed integration services in asp.net to facilitate
                  communication and data transfer between 4 different
                  applications.
                </li>
              </ul>
            </div>
          </section>

          <section className="resume_c3_achievements">
            <h2>Projects</h2>
            <div className="resume_c3_achievement-row">
              <div className="resume_c3_achievement">
                <h3>Cost Saving Of $2M</h3>
                <p>
                  Through efficient project management and teamwork, my team
                  saved the division at Intel over $2 million development
                  department.
                </p>
              </div>
              <div className="resume_c3_achievement">
                <h3>Identified Opportunities</h3>
                <p>
                  Discovered 2 new clients and negotiated over $5 million of
                  partnership and product deals with key customers.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="resume_c3_right-column">
          <section className="resume_c3_skills">
            <h2>TECHNICAL SKILLS</h2>
            <ul className="resume_c3_skillsul">
              <li>Scrum</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL</li>
              <li>Scrum</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
          </section>

          <section className="resume_c3_education">
            <h2>EDUCATION</h2>
            <div className="resume_c3_degree">
              <h3>Bachelor of Computer Science</h3>
              <p>University of California, Berkeley</p>
              <p>2009 - 2013 </p>
            </div>
            <div className="resume_c3_degree">
              <h3>MBA in Technology Management</h3>
              <p>University of California, Berkeley</p>
              <p>2016 - 2018 </p>
            </div>
          </section>

          <section className="resume_c3_certificates">
            <h2>Certificates</h2>
            <div className="resume_c3_certificate">
              <h3>Critical Thinking</h3>
              <p>
                Issued by: [Issuing Organization]<br />
                Date: [Date of Issue]
              </p>
            </div>
            <div className="resume_c3_certificate">
              <h3>Go-Getter</h3>
              <p>
                Issued by: [Issuing Organization]<br />
                Date: [Date of Issue]
              </p>
            </div>
            <div className="resume_c3_certificate">
              <h3>Self-Disciplined</h3>
              <p>
                Issued by: [Issuing Organization]<br />
                Date: [Date of Issue]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Resume_c3;