import {useState, useEffect, useRef} from "react";
import Footer from "../components/Footer";
import PublicNavbar from "../components/PublicNavbar";
import axios from 'axios';
import React from "react";

export const Movies = () => {
    const [upMovie, setUpMovie] = useState([]);
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

    useEffect(() => {
        getMovieBanner();
    }, [])
    useEffect(() => {
        if (firstrender.current) {
            firstrender.current = false;
        } else {
            getMovieImageBanner();
        }

    }, [upMovie])

    function getMovieImageBanner() {
        let banner = document.getElementById("banner-bg")
        banner.style.backgroundImage = `url(${upMovie.primaryImage ? upMovie.primaryImage.url : "./assets/images/notavailable.jpg"})`
    }

    {/* set action movie cards  */
    }

    const [action, setAction] = useState([]);

    async function getActionMovie() {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
                genre: 'Action',
                limit: '3'
            },
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setAction(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getActionMovie();
    }, [])

    {/* set drama movie cards  */
    }
    const [drama, setDrama] = useState([]);

    async function getDramaMovie() {

        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
                genre: 'Drama',
                limit: '3'
            },
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setDrama(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDramaMovie();
    }, [])
    {/* romantic movies */
    }
    const [romantic, setRomantic] = useState([]);

    async function getRomanticMovies() {

        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
                genre: 'Romance',
                limit: '3',
                page: '2'
            },
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setRomantic(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRomanticMovies();
    }, [])

    return (
        <>
            <div className="movie-navbar">
                <PublicNavbar/>
            </div>
            {/* movie banner  */}
            <div className="banner-container" id="banner-bg">
                <div className="banner-content">
                {
                    upMovie.length === 0 &&
                    <> <span className="overlay-text">Loading...</span>
                        <span className="overlay-para">Description: Loading...</span>
                        <button className="btn-clr">Wait...</button>
                    </>
                }
                {
                    upMovie.length !== 0 &&
                    <>
                        <span className="overlay-text">{upMovie.originalTitleText.text}</span>
                        <span className="overlay-para"> Release date:{upMovie.releaseDate.day}/{upMovie.releaseDate.month}/{upMovie.releaseDate.year}</span>
                        <button className="btn-clr">Watch Trailer</button>
                    </>
                }
                </div>
            </div>
            {/* set action movie card */}
            <div className="action-movie-card">
                <div className="popular-container">
                    <span>Action movies</span>
                    <button className="btn-trailer">explore more</button>
                </div>
                <div className="card-grid">
                    {
                        action.map(((value, index) => {
                            return (
                                <>
                                    <div className="movie-card" key={index}>
                                        <div className="movie-card-image">
                                            <img src={value.primaryImage ? value.primaryImage.url : "./assets/images/notavailable.jpg"} alt="Card Image"/>
                                        </div>
                                        <div className="movie-card-content">
                                            <span>{value.originalTitleText.text}</span>
                                            <span>{value.titleType.text}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        }))
                    }
                </div>
            </div>
            {/* drama movie card */}
            <div className="drama-movie-container">
                <div className="popular-container">
                    <span>Drama movies</span>
                    <button className="btn-trailer">explore more</button>
                </div>
                <div className="card-grid">
                    {
                        drama.map(((value, index) => {
                            return (
                                <>
                                    <div className="movie-card" key={index}>
                                        <div className="movie-card-image">
                                            <img src={value.primaryImage ? value.primaryImage.url : "./assets/images/notavailable.jpg"} alt="Card Image"/>
                                        </div>
                                        <div className="movie-card-content">
                                            <span>{value.originalTitleText.text}</span>
                                            <span>{value.titleType.text}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        }))
                    }
                </div>
            </div>
            {/* set romantic movie card  */}
            <div className="romantic-movie-card">

                <div className="popular-container">
                    <span>romantic movies</span>
                    <button className="btn-trailer">explore more</button>
                </div>
                <div className="card-grid">
                    {
                        romantic.map(((value, index) => {
                            return (
                                <>
                                    <div className="movie-card" key={index}>
                                        <div className="movie-card-image">
                                            <img src={value.primaryImage ? value.primaryImage.url : "./assets/images/notavailable.jpg"} alt="Card Image"/>
                                        </div>
                                        <div className="movie-card-content">
                                            <span>{value.originalTitleText.text}</span>
                                            <span>{value.titleType.text}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        }))
                    }
                </div>
            </div>
            <div className="movie-footer">
                <Footer/>
            </div>
        </>
    )
}
export default Movies;