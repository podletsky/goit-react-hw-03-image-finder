import React, { Component } from 'react';
import { fetchPicture } from '../api/Api.js';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery.js';
import ButtonLoadMore from './button/Button';
import CustomProgressBar from './loader/Loader.js';
import Modal from './modal/Modal.js';
import styles from '../components/App..module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchValue: '',
      lastLoadedImages: [],
      loading: false,
      selectedImage: null,
      showButton: false,
    };
  }

  handleSearch = async searchValue => {
    this.setState({ loading: true });
    const response = await fetchPicture(searchValue);
    const images = response.hits;
    this.setState({
      images,
      searchValue,
      lastLoadedImages: images,
      loading: false,
      showButton: true,
    });
  };
  handleLoadMore = async () => {
    const { searchValue, images } = this.state;
    this.setState({ loading: true });

    if (images.length !== 0) {
      const response = await fetchPicture(
        searchValue,
        Math.ceil(images.length / 12) + 1
      );
      const newImages = response.hits;

      this.setState(
        prevState => ({
          images: [...prevState.images, ...newImages],
          loading: false,
        }),
        () => {
          const galleryContainer = document.querySelector('.gallery');
          if (galleryContainer) {
            galleryContainer.scrollTo({
              bottom:
                galleryContainer.scrollHeight - galleryContainer.clientHeight,
              behavior: 'smooth',
            });
          }
        }
      );
    }
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage, showButton } = this.state;

    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {showButton && images.length !== 0 && (
          <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />
        )}
        {loading && <CustomProgressBar />}
        {selectedImage && (
          <Modal image={selectedImage} closeModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
export { App };
