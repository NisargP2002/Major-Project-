import React from 'react'
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { Home, About, Contact, Services } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/services' element={<Services/>}/>
            </Routes>
        </Router>

    </main>
  )
}

export default App