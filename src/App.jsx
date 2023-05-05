import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Hommie from "./Components/Home/Hommie"

const App = () => {
  return (
    <div className='font-Poppins bg-Solitude'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Hommie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

