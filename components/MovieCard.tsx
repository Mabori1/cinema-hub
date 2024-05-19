"use client";
import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="movie-card" onClick={openModal}>
        <Image
          src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          fill
          className="thumbnail"
        />
        <div className="border"></div>
      </div>
      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </div>
  );
};

export default MovieCard;
