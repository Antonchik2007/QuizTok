import React, {useEffect}from "react";
import axios from 'axios';
const ScrollTry = ({pageProps}) => {

    const [pageData, setPageData, currentPage, setCurrentPage] = pageProps;

    useEffect(() => {
        const fetchAnswers = async () => {
            try{
                const response = await axios.get('https://antonchik2007.github.io/DataBase/db.json')
                setPageData(response.data);
                console.log(pageData)
                
            }
            catch(error){
                console.error('Error fetching data', error)
            }
        }
        fetchAnswers();
    }, [])
    

    return(
        <div>
            
        </div>
    )
}

export default ScrollTry;