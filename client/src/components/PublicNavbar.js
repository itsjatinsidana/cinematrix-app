import { Link } from "react-router-dom";
<link rel="stylesheet" href="style.css" />

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
     <ul className="colour">
        <li>Home</li>
        <li>Movies</li>
        <li>Tv Shows</li>
        <li>search</li>
     </ul>
    </div>


   </nav>
    </>
    )
}
export default PublicNavbar;