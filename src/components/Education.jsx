import {useState} from 'react'


function Education() {
  const [ education, setEducation] = useState([{institution: "University of Delaware", field: "Fashion", completionYear: 2020, id: crypto.randomUUID()}]);

  const educationList = education.map((educationalExperience) => { 
    return <EducationalExperience educationalExperience={educationalExperience} key={educationalExperience.id} updateEducation={setEducation} education={education}/>
  });

  const addEducationHandler = () =>{
    const newEducationalExperience = {institution: "", field: "", completionYear: undefined, id: crypto.randomUUID()};
    const updatedEducation = [...education];

    updatedEducation.push(newEducationalExperience);
    setEducation(updatedEducation);
  };

  return(
    <div className="education-container section">
      <div className="section-header">
        <h2>Education</h2><button onClick={addEducationHandler}><img src="plus.png" alt="plus-icon" /></button>
      </div>
      { educationList }
    </div>
  )
}

export default Education;

function EducationalExperience({education, educationalExperience, updateEducation}) {
  const isEntryNew = (educationalExperience.institution ==="" && educationalExperience.field === "" && educationalExperience.completionYear === undefined) ? true : false;
  const [ inEditing, setInEditing ] = useState(isEntryNew);

  const updateInput = (e) => {
    const newEducation = [...education];

    const educationIndex = education.findIndex(value => value === educationalExperience);
    const newEducationalExperience = {...educationalExperience, [e.target.id]: e.target.value }
    newEducation[educationIndex] = newEducationalExperience;

    updateEducation(newEducation);
  };

  const institutionElem = inEditing ? <input type="text" value={educationalExperience.institution} id="institution" onChange={updateInput}/> : <p>{educationalExperience.institution}</p>;
  const fieldElem = inEditing ? <input type="text" value={educationalExperience.field} id="field" onChange={updateInput}/> : <p>{educationalExperience.field}</p>;
  const completionYearElem = inEditing ? <input type="number" value={educationalExperience.completionYear} id="completionYear" onChange={updateInput}/> : <p>{educationalExperience.completionYear}</p>;
  const editButtonText = inEditing ? "Save" : "Edit";

  const toggleEdit = () => {
    inEditing ? setInEditing(false) : setInEditing(true);
  }

  const handleDeletion = () => {
    const updatedEducation = education.filter(value => value.id !== educationalExperience.id );
    updateEducation(updatedEducation);
  }

  return(
    <div className="card-educational-experience card">
      <div className="button-container">
        <button onClick={toggleEdit}>{editButtonText}</button>
        <button onClick={handleDeletion}>Delete</button>
      </div>
      <div className="field-container">
        <div className="field">
          <p>Institution: </p>  { institutionElem }
        </div>
        <div className="field">
          <p>Field: </p>  { fieldElem }
        </div>
        <div className="field">
          <p>Completion Year: </p>  { completionYearElem }
        </div>
      </div>
    </div>
  )
}