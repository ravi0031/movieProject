import { useEffect, useState } from "react"
import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";


const Toprated = () => {
   const [listOfMovies,setListOfMovies] = useState([]);   

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data =await fetch(
           "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/top_rated?api_key={api_key}&language=en-US&page=1" 
        );
        const jsonObj = await data.json();
    console.log(jsonObj);
    console.log(jsonObj.results);

    setListOfMovies(
        jsonObj?.results  || []
    );
};
 return listOfMovies.length ===0 ? (
    <Header/>
 ) : (
    <div className="mov-container">
        
        {listOfMovies.map((movie) => (
        <MovieCard
          key={movie.id} resInfo={movie} />
          /*title={movie.title}
          backdrop_path={movie.backdrop_path}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          original_language={movie.original_language}
          popularity={movie.popularity}
        />*/
        ))}
    </div>
 );
    };


export default Toprated;
