import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';
export const Series = () => {
  const [sbanner, setSbanner] = useState([]);
  const firstrender = useRef(true);
  async function getSbanner() {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      params: {
        genre: 'Mystery',
        limit: '1',
        page: '6'
      },
      headers: {
        'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.results[0]);
      setSbanner(response.data.results[0]);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSbanner();

  }, [])
  useEffect(() => {
    if (firstrender.current) {
      firstrender.current = false;
    }
    else {
      getMovieImageBanner();
    }

  }, [sbanner])
  function getMovieImageBanner() {
    let banner = document.getElementById("banner-bg")
    banner.style.backgroundImage = `url(${sbanner.primaryImage.url})`
  }
  {/*Series card 1 */ }
  const[card1,setCard1]= useState([]);
  async function getCard1() {
      const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      params: {
        genre: 'Biography',
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
      setCard1(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }
    useEffect(() =>{
     getCard1();
    },[])
    {/*card 2 */}
    const[card2, setCard2] = useState([]);
   async function getCard2(){
      

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  params: {
    genre: 'History',
    limit: '3',
    page: '100'
  },
  headers: {
    'X-RapidAPI-Key': '904536df4emsh2aac700c28b8eedp1660adjsn45c008306c57',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.results);
  setCard2(response.data.results);
} catch (error) {
	console.error(error);
}
    }
    useEffect(()=>{
   getCard2();
    },[])
  return (
    <>
      <PublicNavbar />
      {/* banner section */}
      <div className="movie-banner-container" id="banner-bg">
        {
          sbanner.length === 0 &&
          <> <h3 className="overlay-text">movie name</h3>
            <p className="overlay-para">movie description in 2 lines</p>
            <button className="btn-clr">Watch Trailer</button></>
        }
        {
          sbanner.length !== 0 &&
          <>
            <h3 className="overlay-text">{sbanner.originalTitleText.text}</h3>
            <p className="overlay-para"> Release date:{sbanner.releaseDate.day}/{sbanner.releaseDate.month}/{sbanner.releaseDate.year}</p>
            <button className="btn-clr">Watch Trailer</button>
          </>
        }
      </div>
      {/* cards 1 */}
      <div className='card1-container'>
       
      <div className="popular-container">
                    <h1>Upcoming </h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br />
                {
                  card1.map(((value,index) =>{
                    return(
                      <>
                        <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={value.primaryImage ? value.primaryImage.url : "./assets/images/notavailable.jpg"} alt="Card Image" />
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
      {/*card 2  */}
      <div className='card2-container'>
      <div className="popular-container">
                    <h1>History </h1>
                    <button className="btn-trailer">explore more</button>
                </div>
                <br />
                {
                  card2.map(((value,index) =>{
                    return(
                      <>
                        <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={value.primaryImage ? value.primaryImage.url : "./assets/images/notavailable.jpg"} alt="Card Image" />
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
      
      <Footer />
    </>
  )
}
