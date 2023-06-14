import { Link } from "react-router-dom";
import{Movies} from "../pages/Movies";

export const PublicNavbar = () =>{
    return(
    <>
   <nav>
    <div className="logo-container">
        <Link to={'/'}>
            <img src="../assets/images/logo.jpg" alt="image-logo" className="logo" />
        </Link>
    </div>
    <div className="navbar-optionList-container">
     <ul className="navbar-list">
        <li className="list-items">
            <Link to={'/'}>
                Home
            </Link></li>
        <li><Link to={'/movies'} >  Movies</Link></li>
        <li><Link to={'/Series'}>Tv Shows</Link></li>
        <li><Link to={'/search'}>search</Link></li>
     </ul>
    </div>


   </nav>
    </>
    )
}
export default PublicNavbar;