import React, { Component } from 'react';
import styles from '../modal/Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  };

  render() {
    const { image, closeModal } = this.props;

    return (
      <div className={styles.modalBackdrop} onClick={closeModal}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <img
            className={styles.modalImage}
            src={image.largeImageURL}
            alt="Зображення"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
