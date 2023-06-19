import {Link} from "react-router-dom";

export const PublicNavbar = () => {

    function openMenu(){
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.add("active");
    }

    function closeMenu(){
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("active");
    }

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
                        <li className="list-items"><Link to={'/search'}>search</Link></li>
                        <li className="ham-icon" onClick={openMenu}><i className="fa-solid fa-bars"></i></li>
                    </ul>
                </div>
            </nav>
            <aside id="sidebar">
                <button className="menu__close" onClick={closeMenu}><i className="fa-solid fa-xmark"></i></button>
                <div className="sidebar">
                    <div className="sidebar__menu">
                        <ul className="menu__list">
                            <li className="menu-items"><Link to={'/'}>Home</Link></li>
                            <li className="menu-items"><Link to={'/movies'}>Movies</Link></li>
                            <li className="menu-items"><Link to={'/Series'}>Tv Shows</Link></li>
                            <li className="menu-items"><Link to={'/search'}>search</Link></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default PublicNavbar;