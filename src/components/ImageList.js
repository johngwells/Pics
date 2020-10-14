import React from 'react';

const ImageList = ({ images }) => {
  console.log(images)
  return (
    <div>
      {images.map(({ description, id, urls }) => (
        <img alt={description} key={id} src={urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
