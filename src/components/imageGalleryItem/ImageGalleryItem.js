import React, { Component } from 'react';
import styles from '../imageGalleryItem/imageGalleryItem.module.css';

class GalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li className={styles.item}>
        <a href={image.largeImageURL}>
          <img src={image.webformatURL} alt="Зображення" width={250} />
        </a>
      </li>
    );
  }
}

export default GalleryItem;
