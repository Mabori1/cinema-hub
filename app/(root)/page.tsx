import { fetchGenresMovies } from "@actions/movieData";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import { Genre } from "@lib/types";
import CategoryList from "@components/CategoryList";
import { log } from "console";

const Home = async () => {
  const genres = (await fetchGenresMovies()) as Genre[];
  const filteredMovies = genres.slice(0, 2);
  log(filteredMovies);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-movies">
        {filteredMovies.map((genre: Genre) => (
          <CategoryList
            key={genre.id}
            title={genre.name}
            movies={genre.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
