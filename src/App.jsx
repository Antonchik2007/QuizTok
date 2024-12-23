import { useEffect, useState } from 'react'
import './App.css'
import ScrollTry from './modules/ScrollTry.jsx'
import Card from './modules/Card.jsx'
export default function App() {
 
  const [pageData, setPageData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(5)

  
  const pageProps = [pageData, setPageData, currentPage, setCurrentPage]


  const cards = Array.from({ length: pageCount }, (_, index) => (
    <Card key={index} pageProps={pageProps} />
  ));
  

  return (
    <main>
      <div className='main-container'>
        <div className='header'>
          <ScrollTry pageProps={pageProps}/>
          <h1 className='app-title'>QuizTok</h1>
        </div>
        <hr/>
        <div className='main-content-wrapper'> 
          {cards}
        </div>
        <div className="footer">
          <div className='footer-wrapper'>
            <h3 className='footer-home-button'>Home</h3>
            <h3 className='footer-profile-button'>Profile</h3>
          </div>
        </div>
        
      </div>
    </main>
  )
}
