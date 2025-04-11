import './App.css'
import Education from './components/Education'
import General from './components/General'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <h1>CV Builder</h1>
      <h2>General Information</h2>
      <General />
      <Education />
      <PracticalExperience />
    </>
  )
}

export default App
