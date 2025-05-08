
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dasbord from './componants/Dasbord'
import Login from './componants/Login'
import Navbar from './componants/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/d' element={<Dasbord/>}/>
      </Routes>
   

    </BrowserRouter>
    {/* <Dasbord/> */}
    {/* <Login/> */}
    </>
  )
}

export default App
