import React, { Component } from 'react';
import { fetchPicture } from '../api/Api.js';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery.js';
import ButtonLoadMore from '../components/button/Button.js';
import CustomProgressBar from './loader/Loader.js';
import styles from '../components/App..module.css';

class App extends Component {
  state = {
    page: 1,
    images: [],
    searchValue: '',
    loading: false,
    showButton: true,
    error: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { page, searchValue } = this.state;
    if (page !== prevState.page || searchValue !== prevState.searchValue) {
      this.setState({ loading: true });
      try {
        const response = await fetchPicture(searchValue, page);
        const newImages = response.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => ({
            id,
            tags,
            webformatURL,
            largeImageURL,
          })
        );
        if (newImages.length === 0) {
          return;
        }
        this.setState(prevState => ({
          images: [...newImages, ...prevState.images],
          loading: false,
        }));
      } catch (error) {
        this.setState({ error: 'Щось пішло не так', loading: false });
      }
    }
  };

  handleSearch = async searchValue => {
    this.setState({
      page: 1,
      images: [],
      searchValue,
      showButton: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  render() {
    const { images, loading, showButton } = this.state;

    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.handleSearch} />
        <div className="imageGallery">
          <ImageGallery images={images} onClick={this.handleImageClick} />
        </div>
        {showButton && images.length !== 0 && (
          <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />
        )}
        {loading && <CustomProgressBar />}
      </div>
    );
  }
}

export { App };
