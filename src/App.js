import React from 'react'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
      <Router>
            <React.Fragment>
                <main>
              <Routes>
                <Route path='/' element={<Home/>}/>
              </Routes>
              </main>
          </React.Fragment>
        </Router>
  )
}

export default App