
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/home'
import Teacher from './component/teacher/teacher'
import Stud from './component/student/stud'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teach' element={<Teacher/>}/>
        <Route path='/stud' element={<Stud/>}/>
      </Routes>
      {/* <Home/> */}
    </BrowserRouter>
  )
}

export default App
