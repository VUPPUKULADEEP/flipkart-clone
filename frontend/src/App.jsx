import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Header from './components/header/Header'


function App() {
  

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
