import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home"
import TechStack from "./components/TechStacks/TechStack"
import Project from "./components/Projects/Project"


function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <TechStack />
    <Project/>
    <Footer/>
    </>
  )
}

export default App
