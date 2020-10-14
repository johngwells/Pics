import React from 'react';

const ImageList = ({ images }) => {

  return (
    <div>
      {images.map((image) => (
        <img alt='unsplash' key={image.urls.regular} src={image.urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
