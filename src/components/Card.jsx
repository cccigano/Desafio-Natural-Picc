import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";
import "./card.css"; 

const Card = ({ photo }) => {
  const { toggleLike } = useContext(PhotoContext);

  return (
    <div className="card" key={photo.id} onClick={() => toggleLike(photo.id)}>
      <div className="badge">
        {photo.liked ? <IconHeart filled /> : <IconHeart />}
      </div>
      <img className="card-img" src={photo.src.medium} alt={photo.title} />
      <div className="card-body">
        <p className="card-title">{photo.alt}</p>
        <h5 className="card-text">Author: {photo.photographer}</h5>
      </div>
    </div>
  );
};

export default Card;
