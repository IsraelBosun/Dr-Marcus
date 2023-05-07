import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Hommie from "./Components/Home/Hommie"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div className='font-Manrope bg-Solitude text-gray'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Hommie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

