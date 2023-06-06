export const Banner = () =>{
    return(
        <>
        <div className="banner-container">
            <img src="../assets/images/banner.jpg" alt="banner-image" className="banner-image"/>
            <h3 className="overlay-text">movie name</h3>
            <p className="overlay-para">movie description in 2 lines</p>
            <button className="btn-clr">Watch Trailer</button>
             </div>
        </>
    )
}
export default Banner;