"use client";

import { baseImgUrl } from "@lib/constants";
import { Movie } from "@lib/types";
import { InfoOutlined, PlayCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const HeroCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
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
          <div className="overlay"></div>
        </div>
        <h1 className="hero-title">{movie?.title}</h1>
        <p className="hero-oferview">{movie?.overview}</p>
        <div className="hero-btns">
          <button className="hero-btn" onClick={openModal}>
            <PlayCircleOutline /> Play Now
          </button>
          <button className="hero-btn" onClick={openModal}>
            <InfoOutlined /> More Info
          </button>
        </div>
      </div>

      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </div>
  );
};

export default HeroCard;
