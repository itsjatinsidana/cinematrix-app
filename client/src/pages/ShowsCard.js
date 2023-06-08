import { Link } from "react-router-dom";

export const ShowsCard = () =>{
    const imageUrl = 'https://picsum.photos/300/200';
    return(
       
        <>
            <div className="popular-container">
            <h1>Popular Tvshows</h1>
            <button className="btn-trailer">Explore more</button>
        </div>
        <br/>
        <Link>
        <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <div className="card-content">
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
    </div>
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <div className="card-content">
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
    </div>
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <div className="card-content">
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
    </div>
    </Link>
        </>
    )
}
export default ShowsCard;