import { useEffect, useState } from 'react'
import './App.css'
import ScrollTry from './modules/ScrollTry.jsx'
import Card from './modules/Card.jsx'
export default function App() {
 
  const [pageData, setPageData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  
  const pageProps = [pageData, setPageData, currentPage, setCurrentPage]

  return (
    <main>
      <div className='main-container'>
        <div className='header'>
          <ScrollTry pageProps={pageProps}/>
          <h1>QuizTok</h1>
        </div>
        <hr/>
        <div className='main-content-wrapper'>
          <Card pageProps={pageProps}/>
        </div>
        <div className='footer-wrapper'>
          <h3>Home</h3>
          <h3>Profile</h3>
        </div>
      </div>
    </main>
  )
}
