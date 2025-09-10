const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
