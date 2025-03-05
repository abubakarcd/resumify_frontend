import React from "react";
import "../../style/resume_c2.css"

function Resume_c2(){
    return(
        <div className="resume_c2_resume-container"> {/* Added the specific class name */}
            <header>
                <h1>Johnatan Wright</h1>
                <h2>Product Manager Inspired by Innovation</h2>
                <p>📞 +1-785-112-8512 | 📧 alexmurphy@gmail.com | 🌍 www.linkedin.com/alex-murphy</p>
                <p>📍 San Francisco, CA</p>
            </header>

            <section className="summary">
                <h3>Summary</h3>
                <p>
                    Result-oriented product manager with 8 years of experience in developing unique software products.
                    Excelled in Scrum, product design, and data analysis to reach optimal product quality. Seeking to join
                    Google and bring innovative products to a broader audience.
                </p>
            </section>

            <section className="experience">
                <h3>Professional Experience</h3>

                <div className="job">
                    <h5>Product Manager - Intel</h5>
                    <p className="job-details">2020 - 2022 | San Francisco, CA</p>
                    <ul>
                        <li>Managed over 2 large delivery projects with a team of 50+.</li>
                        <li>Implemented a faster process for feature ideation, validation, and development.</li>
                        <li>Worked on Intel Xeon Scalable Processors.</li>
                        <li>Executed strategy based on financial projections and customer feedback.</li>
                    </ul>
                </div>

                <div className="job">
                    <h5>Senior Software Engineer - Samsung</h5>
                    <p className="job-details">2019 - 2020 | Los Angeles, CA</p>
                    <ul>
                        <li>Led a team of 10 offshore and onsite developers.</li>
                        <li>Reduced production time by 25% with an automated tool.</li>
                        <li>Developed 5 backend PL/SQL procedures and functions for BI reporting.</li>
                    </ul>
                </div>

                <div className="job">
                    <h4>Software Engineer - Microsoft</h4>
                    <p className="job-details">2014 - 2020 | San Diego, CA</p>
                    <ul>
                        <li>Optimized network stack, reducing latency by 33%.</li>
                        <li>Improved migration tool performance by 53%.</li>
                        <li>Refactored analytics tool, cutting computation time by 37%.</li>
                    </ul>
                </div>
            </section>

            <section className="education">
                <h3>Education</h3>
                <div className="edu-item">
                    <h5 className="edu-degree">Bachelor's in Computer Science</h5>
                    <p className="edu-details">Stanford University | 2010 - 2014</p>
                </div>
                <div className="edu-item">
                    <h5>Bachelor's in Computer Science</h5>
                    <p className="edu-details">Stanford University | 2010 - 2014</p>
                </div>
            </section>

            {/* Projects Section (Displayed in Horizontal Line) */}
            <section className="projects">
                <h3>Projects</h3>
                <div className="projects-container">
                    <div className="project">
                        <h5>AI Chatbot - Jan 2023</h5>
                        <p>Developed an AI-powered chatbot for customer service automation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias possimus autem qui eaque praesentium reprehenderit unde aperiam? Magni voluptatibus alias omnis qui fugiat quas saepe cupiditate facere quasi. Sit.</p>

                    </div>

                    <div className="project">
                        <h5>Blockchain Wallet_2023</h5>
                        <p>Built a secure Ethereum-based cryptocurrency wallet.Developed an AI-powered chatbot for customer service automation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias possimus autem qui eaque praesentium reprehenderit unde aperiam? Magni voluptatibus alias omnis qui fugiat quas saepe cupiditate facere quasi. Sit.</p>

                    </div>

                    <div className="project">
                        <h5>E-commerce Website</h5>
                        <p>Designed a responsive online store for a fashion brand.</p>
                    </div>
                </div>
            </section>

            <section className="skills">
                <h3>Technical Skills</h3>
                <ul>
                    <li>Scrum</li>
                    <li>Product Development</li>
                    <li>Python</li>
                    <li>Data Analysis</li>
                    <li>React</li>
                    <li>Blockchain</li>
                    <li>Product Development</li>
                    <li>Python</li>
                    <li>Data Analysis</li>
                    <li>React</li>
                    <li>Blockchain</li>
                </ul>
            </section>
        </div>
    )
}
export default Resume_c2