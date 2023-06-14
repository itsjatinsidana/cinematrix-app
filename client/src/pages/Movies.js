import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import PublicNavbar from "../components/PublicNavbar";
import axios from 'axios';

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
        }
        else {
            getMovieImageBanner();
        }

    }, [upMovie])
    function getMovieImageBanner() {
        let banner = document.getElementById("banner-bg")
        banner.style.backgroundImage = `url(${upMovie.primaryImage.url})`
    }

    {/* set action movie cards  */ }

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

    {/* set drama movie cards  */ }
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
    {/* romantic movies */ }
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
                <PublicNavbar />
            </div>
            {/* movie banner  */}
            <div className="movie-banner-container" id="banner-bg">
                {
                    upMovie.length === 0 &&
                    <> <h3 className="overlay-text">movie name</h3>
                        <p className="overlay-para">movie description in 2 lines</p>
                        <button className="btn-clr">Watch Trailer</button></>
                }
                {
                    upMovie.length !== 0 &&
                    <>
                        <h3 className="overlay-text">{upMovie.originalTitleText.text}</h3>
                        <p className="overlay-para"> Release date:{upMovie.releaseDate.day}/{upMovie.releaseDate.month}/{upMovie.releaseDate.year}</p>
                        <button className="btn-clr">Watch Trailer</button>
                    </>
                }
            </div>
            {/* set action movie card */}
            <div className="action-movie-card">
                <div className="popular-container">
                    <h1>Action movies</h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br />
                {
                    action.map(((value, index) => {
                        return (
                            <>
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={value.primaryImage.url} alt="Card Image" />
                                    </div>
                                    <div className="card-content">
                                        <h3>{value.originalTitleText.text}</h3>
                                        <p>{value.titleType.text}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
            </div>
            {/* drama movie card */}
            <div className="drama-movie-container">
                <div className="popular-container">
                    <h1>Drama movies</h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br />
                {
                    drama.map(((value, index) => {
                        return (
                            <>
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={value.primaryImage?value.primaryImage.url:"./assets/images/notavailable.jpg"} alt="Card Image" />
                                    </div>
                                    <div className="card-content">
                                        <h3>{value.originalTitleText.text}</h3>
                                        <p>{value.titleType.text}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
            </div>
            {/* set romantic movie card  */}
            <div className="romantic-movie-card">

                <div className="popular-container">
                    <h1>romantic movies</h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br />
                {
                    romantic.map(((value,index)=>{
                        return(
                            <>
                             <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={value.primaryImage?value.primaryImage.url:"./assets/images/notavailable.jpg"} alt="Card Image" />
                                    </div>
                                    <div className="card-content">
                                        <h3>{value.originalTitleText.text}</h3>
                                        <p>{value.titleType.text}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
            </div>
            <div className="movie-footer">
                <Footer />
            </div>
        </>
    )
}
export default Movies;