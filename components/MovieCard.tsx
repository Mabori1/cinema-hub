import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import Image from "next/image";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="movie-card">
      <Image
        src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="thumbnail"
      />
      <div className="border"></div>
    </div>
  );
};

export default MovieCard;
