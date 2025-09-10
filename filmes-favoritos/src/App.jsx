import { useState } from "react";
import Header from "./components/header";
import MovieCard from "./components/MovieCard";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Header title="Meus Filmes Favoritos" />
      <AddMovieForm onAdd={addMovie} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
