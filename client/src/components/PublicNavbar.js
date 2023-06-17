import {Link} from "react-router-dom";
import {Movies} from "../pages/Movies";

export const PublicNavbar = () => {
    return (
        <>
            <nav>
                <div className="logo-container">
                    <Link to={'/'}>
                        <span className="logo">Cinematrix</span>
                    </Link>
                </div>
                <div className="navbar-optionList-container">
                    <ul className="navbar-list">
                        <li className="list-items"><Link to={'/'}>Home</Link></li>
                        <li className="list-items"><Link to={'/movies'}>Movies</Link></li>
                        <li className="list-items"><Link to={'/Series'}>Tv Shows</Link></li>
                        <li className="list-items"><Link to={'/search'}>search</Link></li>
                    </ul>
                </div>


            </nav>
        </>
    )
}
export default PublicNavbar;