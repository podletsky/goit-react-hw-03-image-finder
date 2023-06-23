import React from 'react';
import styles from '../imageGallery/ImageGalery.module.css';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem.js';
import PropTypes from 'prop-types';
const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default ImageGallery;
