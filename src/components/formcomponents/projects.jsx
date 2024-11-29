import React,{useState} from "react";
import Skills from "./skills";

function Projects() {
  const [save, setsave] = useState(false);

  function toskill() {
    setsave(true);
  }

  return (
    <>
      {save ? (
        <><Skills/></>
      ) : (
        <>
          <div className="projects-form-container">
            <div className="form-header">
              <h2>Project Details</h2>
              <button className="back-button">Back</button>
            </div>

            <form className="projects-form" onSubmit={toskill}>
              <div className="input-group">
                <label htmlFor="project-name">Project Name:</label>
                <input
                  type="text"
                  id="project-name"
                  name="project-name"
                  placeholder="Enter the project name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter the project description"
                  rows="4"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="date">Project Date:</label>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  pattern="\d{4}"
                  id="date"
                  name="date"
                  required
                />
              </div>

              <div className="button-group">
                <button className="add-button">Add Project</button>
                <button className="save-button" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
