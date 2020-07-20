import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Setting from './Settings'
import Header from './Header'
import Home from './Home'

function AppRouter() {
  return (
    <Router>
      <Header />

      <Routes >
        <Route path="/" element={<Home />} />

        <Route path="Setting" element={<Setting />} />
      </Routes>

    </Router>
  )
}

export default AppRouter;