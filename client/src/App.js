import React from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import { Movies } from './components/Main/Movies/Movies'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="contentContainer">
        <Movies />
        {/* <Theatres /> */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
