import {PublicNavbar} from "../components/PublicNavbar";
import {Banner} from "../pages/Banner";
import {Footer} from "../components/Footer";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    const [movieCard, setMovieCard] = useState([]);
    const [showCard, setShowCard] = useState([]);

    async function getMovieCard() {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {limit: '3'},
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setMovieCard(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovieCard()
    }, [])//[] dependency arr used to depend on a state which we put insite that dependency arr

    {/*get shows card function */
    }

    async function getTvShows() {

        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: {
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
            setShowCard(response.data.results)
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getTvShows();
    }, [])

    return (

        <>
            <div className="home-container">
                <PublicNavbar/>
                <Banner/>

                {/* popular movie section*/}
                <div className="popular-container">
                    <span>Popular movies</span>
                    <Link to={"/movies"}>
                        <button className="btn-trailer">explore more</button>
                    </Link>
                </div>
                <div className="card-grid">
                    {
                        movieCard.map(((value, index) => {
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
                {/* popular shows section*/}

                <div className="popular-container">
                    <span>Popular Tvshows</span>
                    <Link to={"/Series"}>
                        <button className="btn-trailer">Explore more</button>
                    </Link>
                </div>
                <div className="card-grid">
                    {
                        showCard.map(((value, index) => {
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
                <Footer/>
            </div>
        </>
    )
}
