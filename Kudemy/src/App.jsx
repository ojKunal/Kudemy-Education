import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Courses from './Pages/Courses/Courses'
import Dashboard from './Pages/Dashboard/Dashboard'
import CourseDetails from './components/CourseDetails/CourseDetails'

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element = {<Courses/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/courseDetails' element = {<CourseDetails/>}/>
          <Route path='/login' element = {<CourseDetails/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
