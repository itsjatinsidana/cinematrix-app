import { PublicNavbar } from "../components/PublicNavbar";
import { Banner } from "../pages/Banner";
import { Footer } from "../components/Footer";
import axios from "axios";

import { ShowsCard } from "../pages/ShowsCard";
import { useEffect, useState } from "react";
export const Home = () => {
    const [movieCard, setMovieCard] = useState([]);
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

                <ShowsCard />

                <Footer />
            </div>
        </>
    )
}
