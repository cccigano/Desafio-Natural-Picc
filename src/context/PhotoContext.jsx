import { useEffect, useState, createContext } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("./photos.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { photos } = await response.json();

        const initializedPhotos = photos.map((photo) => ({
          ...photo,
          liked: false,
        }));

        setPhotos(initializedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const toggleLike = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: !photo.liked };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        toggleLike,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
