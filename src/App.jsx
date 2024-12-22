import { useEffect, useState } from 'react'
import './App.css'
import Card from './modules/Card.jsx'
export default function App() {
 

  
  return (
    <main>
      <div className='main-container'>
        <div className='header'>
          <h1>QuizTok</h1>
        </div>
        <hr/>
        <div className='main-content-wrapper'>
          <Card/>
        </div>
        <div className='footer-wrapper'>
          <h3>1st</h3>
          <h3>2nd</h3>
          <h3>3rd</h3>
        </div>
      </div>
    </main>
  )
}
