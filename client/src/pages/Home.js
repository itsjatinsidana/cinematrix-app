 import { PublicNavbar } from "../components/PublicNavbar";
 import{Footer} from "../components/Footer";
 export const Home = ()=>{
    return(
        <>
        <div className="home-container">
                <PublicNavbar/>
            
            <div className="banner-container">
                   banner
            </div>
        <div className="movie-section-container">
                     movie section
        </div>
       <Footer/>
        </div>
        </>
    )
}
