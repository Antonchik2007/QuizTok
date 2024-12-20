import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
export default function App() {
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  

  
  useEffect(() =>{
    if(fetching){
      console.log('fetching')
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
        .then(response => {
        setPhotos([...photos, ...response.data])
        setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
    }
    
  }, [fetching])

  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function (){
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  
  const scrollHandler = (e) =>{
    if(e.target.documentElement.scrollHeight-    (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setFetching(true)
    }
  }

  
  return (
    <main>
      {photos.map(photo => 
        <div className='photo' key={photo.id}>
          <div className='title' key={photo.id*-1}>{photo.id}.{photo.title}</div>
          <img src={photo.thumbnailUrl} key={photo.thumbnailUrl}/>
        </div>
      )}
    </main>
  )
}
