import React from 'react';
import styles from '../imageGallery/ImageGalery.module.css';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem.js';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
