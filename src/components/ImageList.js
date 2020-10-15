import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = ({ images }) => {
  console.log(images)
  return (
    <div class="image-list">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
