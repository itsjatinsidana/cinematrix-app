import { useState,useEffect,useRef } from "react";
import Footer from "../components/Footer";
import PublicNavbar from "../components/PublicNavbar";
import axios from 'axios';

export const Movies = () => {
    const[upMovie,setUpMovie] = useState([]);
    const firstrender = useRef(true);
    async function getMovieBanner() {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
                limit: '1',
                page: '25'
            },
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results[0]);
            setUpMovie(response.data.results[0])
        } catch (error) {
            console.error(error);
        }
    }
      useEffect(()=>{
        getMovieBanner();
    },[])
    useEffect(() =>{
        if(firstrender.current){
           firstrender.current=false;
        }
        else{
          getMovieImageBanner();
        }
        
       },[upMovie])
       function getMovieImageBanner(){ 
        let banner = document.getElementById("banner-bg")
        banner.style.backgroundImage=`url(${upMovie.primaryImage.url})`
       }

    return (
        <>
            <div className="movie-navbar">
                <PublicNavbar />
            </div>
            {/* movie banner  */}
            <div className="movie-banner-container" id="banner-bg">
                {
                     upMovie.length===0 && 
                     <> <h3 className="overlay-text">movie name</h3>
                     <p className="overlay-para">movie description in 2 lines</p>
                     <button className="btn-clr">Watch Trailer</button></>
                  }
                  {
                    upMovie.length!==0 &&
                    <>
                     <h3 className="overlay-text">{upMovie.originalTitleText.text}</h3>
                    <p className="overlay-para"> Release date:{upMovie.releaseDate.day}/{upMovie.releaseDate.month}/{upMovie.releaseDate.year}</p>
                    <button className="btn-clr">Watch Trailer</button>
                    </>
                }
            </div>
            <div className="movie-footer">
                <Footer />
            </div>
        </>
    )
}
export default Movies;