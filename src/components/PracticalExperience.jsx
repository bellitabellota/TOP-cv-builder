import {useState} from 'react'

function PracticalExperience() {
  const [ pExperiences, setPExperiences] = useState([{company: "Hard Work Company", position: "Marketing Lead", responsibilities: "Client Acquisition", start: "1998-03-04", end: "2025-05-06", id: crypto.randomUUID()}]);


  const pExperienceList = pExperiences.map(pExperience => {return <PExperience pExperiences={pExperiences} pExperience={pExperience} updatePExperience={setPExperiences} key={pExperience.id}/>})

  const addPExperienceHandler = () =>{
    const newPExperience = {company: "", position: "", responsibilities: "", start: "", end: "", id: crypto.randomUUID()};
    const updatedPExperiences = [...pExperiences];

    updatedPExperiences.push(newPExperience);
    setPExperiences(updatedPExperiences);
  };

  return(
    <div className="practical-experience-container section">
      <div className="section-header">
        <h2>Practical Experience</h2><button onClick={addPExperienceHandler}><img src="plus.png" alt="plus-icon" /></button>
      </div>
      { pExperienceList }
    </div>
  )
}

export default PracticalExperience;

function PExperience({pExperiences, pExperience, updatePExperience}) {
  const isEntryNew = (pExperience.company ==="" && pExperience.position === "" && pExperience.responsibilities === "" && pExperience.start === "" && pExperience.end === "") ? true : false;
  const [ inEditing, setInEditing ] = useState(isEntryNew);

  const updateInput = (e) => {
    const newPExperiences = [...pExperiences];

    const pExperienceIndex = pExperiences.findIndex(value => value === pExperience);
    const newPExperience = {...pExperience, [e.target.id]: e.target.value}
    newPExperiences[pExperienceIndex] = newPExperience;
    
    updatePExperience(newPExperiences);
  };

  const companyElem = inEditing ? <input type="text" value={pExperience.company} id="company" onChange={updateInput}/> : <p>{pExperience.company}</p>;
  const positionElem = inEditing ? <input type="text" value={pExperience.position} id="position" onChange={updateInput}/> : <p>{pExperience.position}</p>;
  const responsibilitiesElem = inEditing ? <input type="text" value={pExperience.responsibilities} id="responsibilities" onChange={updateInput}/> : <p>{pExperience.responsibilities}</p>;
  const startElem = inEditing ? <input type="date" value={pExperience.start} id="start" onChange={updateInput}/> : <p>{pExperience.start}</p>;
  const endElem = inEditing ? <input type="date" value={pExperience.end} id="end" onChange={updateInput}/> : <p>{pExperience.end}</p>;
  const editButtonText = inEditing ? "Save" : "Edit";

  const toggleEdit = () => {
    inEditing ? setInEditing(false) : setInEditing(true);
  }

  const handleDeletion = () => {
    const updatedPExperiences = pExperiences.filter(value => value.id !== pExperience.id);
    updatePExperience(updatedPExperiences);
  }
  
  return(
    <div className="card-educational-experience card">
    <div className="button-container">
      <button onClick={toggleEdit}>{editButtonText}</button>
      <button onClick={handleDeletion}>Delete</button>
    </div>
    <div className="field-container">
      <div>
        <p>Company: </p>  { companyElem }
      </div>
      <div>
        <p>Position: </p>  { positionElem }
      </div>
      <div>
        <p>Responsibilities: </p>  { responsibilitiesElem }
      </div>
      <div>
        <p>Start Date: </p>  { startElem }
      </div>
      <div>
        <p>End Date: </p>  { endElem }
      </div>
    </div>
  </div>
  )
}