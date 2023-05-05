import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className='font-Poppins'>
      <BrowserRouter>
        <Navbar />
      
      </BrowserRouter>
    </div>
  )
}

export default App

