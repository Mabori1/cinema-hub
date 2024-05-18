import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import Image from "next/image";

const HeroCard = ({ movie }: { movie: Movie }) => {
  console.log(`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`);
  return (
    <div className="hero">
      <div className="hero-bg">
        <Image
          src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          className="hero-bg-image"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className="hero-title">{movie?.title}</h1>
    </div>
  );
};

export default HeroCard;
