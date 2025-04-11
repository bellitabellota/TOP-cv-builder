import './App.css'
import Education from './components/Education'
import General from './components/General'
import PracticalExperience from './components/PracticalExperience'
import './components/section.css'

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <General />
      <Education />
      <PracticalExperience />
    </>
  )
}

export default App
