import { fetchTrendingMovies } from "@actions/movieData";
import HeroCard from "./HeroCard";

const Hero = async () => {
  const trending = await fetchTrendingMovies();
  const randomNumber = Math.floor(Math.random() * trending.length);
  const trendingMovie = trending[randomNumber];

  return (
    <div>
      <HeroCard movie={trendingMovie} />
    </div>
  );
};

export default Hero;
