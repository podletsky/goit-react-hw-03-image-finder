import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import GalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

class Modal extends Component {
  handleClick = image => {
    const instance = basicLightbox.create({ src: image });

    instance.show();
  };

  render() {
    const { image } = this.props;

    return (
      <GalleryItem image={image} onClick={() => this.handleClick(image)} />
    );
  }
}

export default Modal;
