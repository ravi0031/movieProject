import { MOV_IMG } from "../utils/constant"

import "./MovieCard.css";


const MovieCard =(props) => (
    <div className="mov-card">
    <div className="image-container">
        <img 
        className="mov-logo"
        src={MOV_IMG + props.resInfo.backdrop_path }
        alt="Movie"
        />
    </div>
        <div className="Mov-details">
         <h3 className="title">{props.resInfo.title}</h3>
         <h3 className="overview">{props.resInfo.overview}</h3>
         <h3 className="vote_average">{props.resInfo.vote_average}</h3>
         <h3 className="original_language ">{props.resInfo.original_language}</h3>
         <h3 className="poularity">{props.resInfo.popularity}</h3>
        </div>
    </div>
    
);

export default MovieCard;