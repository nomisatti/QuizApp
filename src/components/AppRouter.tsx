import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Setting from './Settings'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
function AppRouter() {
  return (
    <Router>
      <Header />

      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="Setting" element={<Setting />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter;