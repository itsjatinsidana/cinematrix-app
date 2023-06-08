 import{PublicNavbar} from "../components/PublicNavbar";
 import{Banner} from "../pages/Banner";
 import{ Footer } from "../components/Footer";
import{MovieCard} from "../pages/MovieCard";
import{ShowsCard} from "../pages/ShowsCard";
 export const Home = ()=>{
    return(
        <>
        <div className="home-container">
                <PublicNavbar/>
                   <Banner/>
                   <MovieCard/>
                   <ShowsCard/>
        
       <Footer/>
        </div>
        </>
    )
}
