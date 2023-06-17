import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

export const Banner = () => {
    const [movie, setMovie] = useState([]) // to set the movie
    const firstrender = useRef(true);  //render to set true

    async function getBanner() {  //copy code from api
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
                limit: '1'
            },
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results[0]);  //
            setMovie(response.data.results[0]);  //t0 store api response data into the movie state
        } catch (error) {
            console.error(error);
        }
    }

    function setBanner() {
        let banner = document.getElementById("ban-bg")
        banner.style.backgroundImage = `url(${movie.primaryImage.url})`
    }

    useEffect(() => {
        if (firstrender.current) {
            firstrender.current = false;
        } else {
            setBanner();
        }
    }, [movie])


    useEffect(() => {   // useeffect runs everytime page loads aur when the componenet reload
        getBanner();
    }, [])
    return (
        <>
            <div className="banner-container" id='ban-bg'>
                <div className="banner-overlay"/>
                <div className="banner-content">
                    {
                        movie.length === 0 &&
                        <> <span className="overlay-text">Loading...</span>
                            <span className="overlay-para">Description: Loading...</span>
                            <button className="btn-clr">Wait...</button>
                        </>
                    }
                    {
                        movie.length !== 0 &&
                        <>
                            <span className="overlay-text">{movie.originalTitleText.text}</span>
                            <span className="overlay-para">Release date: {movie.releaseDate.day}/{movie.releaseDate.month}/{movie.releaseDate.year}</span>
                            <button className="btn-clr">Browse More...</button>
                        </>
                    }
                </div>
            </div>


        </>
    )
}
export default Banner;