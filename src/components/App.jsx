import React, { Component } from 'react';
import { fetchPicture } from '../api/Api.js';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery';
import ButtonLoadMore from './button/Button';
import CustomProgressBar from './loader/Loader.js';
import Modal from './modal/Modal.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchValue: '',
      lastLoadedImages: [],
      loading: false,
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
    }); //
  };

  handleLoadMore = async () => {
    const { searchValue, images } = this.state;

    if (this.state.images.length !== 0) {
      this.setState({ loading: true });
      const response = await fetchPicture(
        searchValue,
        Math.ceil(images.length / 12) + 1
      );
      const newImages = response.hits;

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        loading: false,
      }));
    }
  };

  render() {
    const { images, loading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery imageList={images} />
        <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />
        {loading && <CustomProgressBar />}
        <Modal />
      </>
    );
  }
}

export { App };
