import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = ({ images }) => {
  console.log(images)
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
