import axios from 'axios';
import {useEffect, useState, useRef} from 'react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';

export const Search = () => {
    const [search, setSearch] = useState([]);
    const [term, setTerm] = useState("");   // state use to store data
    const [check, setCheck] = useState(false);
    const [current, setCurrent] = useState("");

    async function searchMovie() {

        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${term}`, // use `` than after manuplating string use ${name of state}
            headers: {
                'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.results);
            setSearch(response.data.results)
            setCheck(true);
            setCurrent(term);                           // if seach happens 
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <PublicNavbar/>
            <div className="search-container">
                <form className="search-form">
                    <input type="text" className="search-input" placeholder="Search movies..." onChange={(e) => setTerm(e.target.value)}/> {/*input tag value chamge than that value should store in the value */}
                    <button className='btn-clr' type="button" onClick={searchMovie}>Search</button>
                    {/*when we click btn than our function will call */}
                </form>
                <div className='results-container'>
                    <div className='result-header'>
                        {
                            search.length === 0 && check &&     // search kiya and kuch nhi aya
                            <span>no results found</span>
                        }
                        {
                            search.length !== 0 && check &&       // search kiya and data agya
                            <span>{search.length} results found for "{current}"</span>
                        }
                    </div>
                    <div className='result-content'>
                        <div className="card-grid">
                            {
                                search.map(((value, index) => {
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
                </div>
            </div>
            <Footer/>
        </>
    )
}