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
    <div className="practical-experience-container">
      <h2>Practical Experience</h2><button onClick={addPExperienceHandler}>+</button>
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

    if(e.target.id === "company") {
      pExperience.company = e.target.value;
    } else if(e.target.id === "position") {
      pExperience.position = e.target.value;
    } else if(e.target.id === "responsibilities") {
      pExperience.responsibilities = e.target.value;
    } else if(e.target.id === "start-date") {
      pExperience.start = e.target.value;
    }else if(e.target.id === "end-date") {
      pExperience.end = e.target.value;
    }
    
    newPExperiences[pExperienceIndex] = pExperience;
    updatePExperience(newPExperiences);
  };

  const companyElem = inEditing ? <input type="text" value={pExperience.company} id="company" onChange={updateInput}/> : <p>{pExperience.company}</p>;
  const positionElem = inEditing ? <input type="text" value={pExperience.position} id="position" onChange={updateInput}/> : <p>{pExperience.position}</p>;
  const responsibilitiesElem = inEditing ? <input type="text" value={pExperience.responsibilities} id="responsibilities" onChange={updateInput}/> : <p>{pExperience.responsibilities}</p>;
  const startElem = inEditing ? <input type="date" value={pExperience.start} id="start-date" onChange={updateInput}/> : <p>{pExperience.start}</p>;
  const endElem = inEditing ? <input type="date" value={pExperience.end} id="end-date" onChange={updateInput}/> : <p>{pExperience.end}</p>;
  const editButtonText = inEditing ? "Save" : "Edit";

  const toggleEdit = () => {
    inEditing ? setInEditing(false) : setInEditing(true);
  }

  const handleDeletion = () => {
    const updatedPExperiences = pExperiences.filter(value => value.id !== pExperience.id);
    updatePExperience(updatedPExperiences);
  }
  
  return(
    <div className="card-educational-experience">
    <button onClick={toggleEdit}>{editButtonText}</button>
    <button onClick={handleDeletion}>Delete</button>
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
  )
}