import React from 'react';
import styles from '../modal/Modal.module.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img
          className={styles.modalImage}
          src={image.largeImageURL}
          alt="Зображення"
        />
        {/* Додайте додаткові елементи модального вікна, якщо потрібно */}
      </div>
    </div>
  );
};

export default Modal;
