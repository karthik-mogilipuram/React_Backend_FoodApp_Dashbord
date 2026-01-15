import React from 'react'
import NotFound from './vendorDashboard/pages/NotFound.jsx'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'



import "./App.css"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element ={<LandingPage/>}/>
        <Route path='/*' element ={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App