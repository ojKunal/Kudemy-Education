import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Courses from './Pages/Courses/Courses'
import Dashboard from './Pages/Dashboard/Dashboard'
import CourseDetails from './components/CourseDetails/CourseDetails'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element = {<Courses/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/courseDetails' element = {<CourseDetails/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/login' element = {<Signin/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
