import React from 'react';
import styles from '../imageGalleryItem/imageGalleryItem.module.css';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';
class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { modalOpen } = this.state;

    return (
      <>
        <li className={styles.item} onClick={this.openModal}>
          <img
            className={styles.image}
            src={image.webformatURL}
            alt="Зображення"
            width={200}
          />
        </li>
        {modalOpen && <Modal image={image} closeModal={this.closeModal} />}
      </>
    );
  }
}
GalleryItem.propType = {
  image: PropTypes.shape({
    webformatURL: PropTypes.isRequired,
  }).isRequired,
};

export default GalleryItem;
