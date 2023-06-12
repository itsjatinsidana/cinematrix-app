import '@fortawesome/fontawesome-free/css/all.css';

export const Footer = () =>{
    return(
    <>
    <footer>
    <div className="container">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <div className="social-media-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

    </footer>
    </>
    )

}
export default Footer;