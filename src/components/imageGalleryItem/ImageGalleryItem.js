import React, { useState } from 'react';
import styles from '../imageGalleryItem/imageGalleryItem.module.css';
import Modal from '../modal/Modal';

const GalleryItem = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li className={styles.item} onClick={openModal}>
        <img
          className={styles.image}
          src={image.webformatURL}
          alt="Зображення"
          width={200}
        />
      </li>
      {modalOpen && <Modal image={image} closeModal={closeModal} />}
    </>
  );
};

export default GalleryItem;
