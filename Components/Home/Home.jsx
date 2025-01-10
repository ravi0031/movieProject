import { useEffect, useState } from "react"
import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";
import { MOV_IMG } from "../utils/constant";

import './Home.css'

const Home = () => {
const [listOfMovies,setListOfMovies] = useState([]);
console.log(listOfMovies);
const [searchText,setSearchText] = useState([]);
const [filteredMovie,setFilteredMovie] = useState([]);
/*useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setListOfMovies(data.results))
        .catch(console.error);
}, []);*/



useEffect(()=> {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    );

    const jsonObj = await data.json();
    console.log(jsonObj);
    console.log(jsonObj.results);

    setListOfMovies(
        jsonObj?.results  || []
    );
    setFilteredMovie(
      jsonObj?.results  || []
    )
};
 return listOfMovies.length ===0 ? (
    <Header/>
 ) : (

    <div  className="body">
        <div className="filter">
            <div className="search">
                <input
                  type="text"
                  className="search-box"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    console.log("Typing search");
                   console.log("Current Input:", e.target.value);
                  }}
                /> 
       <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredMovie = listOfMovies.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );

             // const filteredMovie = listOfMovies.filter((res) =>
               //</div> res.info.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())
              //);

              setFilteredMovie(filteredMovie);
              //setFilteredRestaurant(filteredRestaurant1);
            }}
          >
            Search
          </button>
        </div> 
     </div>
        
   


    <div className="mov-container">
        
        {filteredMovie.map((movie) => (
          <MovieCard key={movie.id} resInfo={movie} />
        /*<MovieCard
          key={movie.id}
          title={movie.title}
          backdrop_path={movie.backdrop_path}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          original_language={movie.original_language}
          popularity={movie.popularity}
          movInfo={movie}
        />*/
        ))}
    </div>
     </div>

 );
};

export default Home;