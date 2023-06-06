 import{PublicNavbar} from "../components/PublicNavbar";
 import{Banner} from "../pages/Banner";
 import{ Footer } from "../components/Footer";
 export const Home = ()=>{
    return(
        <>
        <div className="home-container">
                <PublicNavbar/>
                   <Banner/>
            
        <div className="movie-section-container">
                     movie section
        </div>
       <Footer/>
        </div>
        </>
    )
}
