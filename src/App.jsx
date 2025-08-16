import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sermons from './pages/Sermons'
import Contact from './pages/Contact'
export default function App(){
  return (
    <div className="app">
      <header className="site-header">
        <div className="container">
          <Link to="/" className="brand">HAM OLA MINISTRY INT INC</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sermons" element={<Sermons/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} HAM OLA MINISTRY INT INC</div>
      </footer>
    </div>
  )
}
