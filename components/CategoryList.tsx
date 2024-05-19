import { Movie } from "@lib/types";
import MovieCard from "./MovieCard";

type CategoryListProps = {
  title: string;
  movies: Movie[];
};

const CategoryList = ({ title, movies }: CategoryListProps) => {
  return (
    <div className="category">
      <h1 className="categori-title">{title}</h1>
      <div className="movie-list">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-card">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
