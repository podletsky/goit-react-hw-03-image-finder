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
    totalImages: 0,
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
          totalImages: response.totalHits,
        }));
      } catch (error) {
        this.setState({ error: 'Щось пішло не так', loading: false });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  handleSearch = async searchValue => {
    this.setState({
      page: 1,
      images: [],
      searchValue,
      totalImages: 0,
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
    const { images, loading, totalImages } = this.state;
    const showButton = !loading && images.length !== totalImages;
    return (
      <div className={styles.container}>
        <Searchbar onSubmit={this.handleSearch} />
        <div className="imageGallery">
          <ImageGallery images={images} onClick={this.handleImageClick} />
        </div>
        {showButton && <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />}
        {loading && <CustomProgressBar />}
      </div>
    );
  }
}

export { App };
