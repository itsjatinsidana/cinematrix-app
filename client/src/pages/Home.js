import { PublicNavbar } from "../components/PublicNavbar";
import { Banner } from "../pages/Banner";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
    const [movieCard, setMovieCard] = useState([]);
    const [showCard, setShowCard] = useState([]);
    async function getMovieCard() {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            params: { limit: '3' },
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

    {/*get shows card function */ }
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
                <PublicNavbar />
                <Banner />

                {/* popular movie section*/}
                <div className="popular-container">
                    <h1>Popular movies</h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br/>
                {
                    movieCard.map(((value, index) => {
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
                {/* popular shows section*/}

                <div className="popular-container" >
                    <h1>Popular Tvshows</h1>
                    <button className="btn-trailer">Explore more</button>
                </div>
               <br/>
                {
                    showCard.map(((value, index) => {
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


                <Footer />
            </div>
        </>
    )
}
