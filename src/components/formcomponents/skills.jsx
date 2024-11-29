import React from "react";

function Skills(){
    return(<>
    <div className="skills-form-container">
  <div className="form-header">
    <h2>Skills</h2>
    <button className="back-button" >Back</button>
  </div>

  <form className="skills-form">
    <div className="input-group">
      <label htmlFor="skill">Skill:</label>
      <input
        type="text"
        id="skill"
        name="skill"
        placeholder="Enter a skill (e.g., JavaScript)"
        required
      />
    </div>

    <div className="button-group">
      <button className="add-button" >
        Add Skill
      </button>
      <button className="save-button" >
        Create Resume
      </button>
    </div>
  </form>
</div>

    </>)
}

export default Skills;