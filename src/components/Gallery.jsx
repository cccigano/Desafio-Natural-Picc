import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./Card";

const Gallery = ({ showFavorites }) => {
  const { photos } = useContext(PhotoContext);

  const filteredPhotos = showFavorites
    ? photos.filter((photo) => photo.liked)
    : photos;

  return (
    <div className="gallery grid-columns-5 p-3">
      {filteredPhotos.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
