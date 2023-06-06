import { Link } from "react-router-dom";

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
        <li>
            <Link to={'/'}>
                home
            </Link></li>
        <li><Link to={'/Movies'}>  Movies</Link></li>
        <li><Link to={'/TvShows'}>Tv Shows</Link></li>
        <li><Link to={'/search'}>search</Link></li>
     </ul>
    </div>


   </nav>
    </>
    )
}
export default PublicNavbar;