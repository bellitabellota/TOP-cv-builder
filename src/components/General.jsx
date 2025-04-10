import { useState } from "react";

function General() {
  const [ person, setPerson ] = useState({
    name: "John Smith",
    email: "+34 666 777 888"
  });

  const [ inEditing, setInEditing ] = useState(false);

  const updateInput = ((e) => {
    if (e.target.id === "name") {
      setPerson({...person, name: e.target.value})
    } else if (e.target.id === "email") {
      setPerson({...person, email: e.target.value})
    }
      
  })

  const nameElem = inEditing ? <input type="text" value={person.name} id="name" onChange={updateInput} /> : <p>{person.name}</p>;
  const emailElem = inEditing ? <input type="email" value={person.email} id="email" onChange={updateInput} />: <p>{person.email}</p>
  const editButtonText = inEditing ? "Save" : "Edit";


  const toggleEdit = () => {
    inEditing ? setInEditing(false) : setInEditing(true)
  }

    return(
    <div className="general-container">
      <button onClick={toggleEdit}>{editButtonText}</button>
      <div>
        <p>Name: </p>  { nameElem }
      </div>
      <div>
        <p>E-Mail: </p>  { emailElem }
      </div>
    </div>
  )
}

export default General;