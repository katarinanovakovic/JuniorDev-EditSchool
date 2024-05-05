import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useContext} from 'react'
import Home from './pages/Home'
import Workshop from './pages/Workshop'
import Instructors from './pages/Instructors'
import Administration from './pages/Administration'
import Navbar from './components/Navbar'
import OpisPredavaca from './components/OpisPredavaca'
import { AdminContext } from './Context'



function App() {
  const [admin, setAdmin]= useState(false)
    const { toggleAdmin } = useContext(AdminContext);


    const handleToggleAdmin = () => {
        setAdmin(prevState => !prevState)
        toggleAdmin();
    }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element= {<Home admin={admin} handleToggleAdmin={handleToggleAdmin}/>} />
      <Route path='/home' element = {<Home admin={admin} handleToggleAdmin={handleToggleAdmin}/>} />
      <Route path='/workshops' element = {<Workshop />} />
      <Route exact path='/instructors' element={<Instructors />} />
      <Route path='/instructors/:id' element={<OpisPredavaca />} />
      <Route path='/administration' element={<Administration />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
