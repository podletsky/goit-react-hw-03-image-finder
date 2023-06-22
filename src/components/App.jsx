// import React, { Component } from 'react';
// import { fetchPicture } from '../api/Api.js';
// import Searchbar from './searchbar/Searchbar';
// import ImageGallery from '../components/imageGallery/ImageGallery.js';
// import ButtonLoadMore from './button/Button';
// import CustomProgressBar from './loader/Loader.js';
// import Modal from './modal/Modal.js';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [],
//       searchValue: '',
//       lastLoadedImages: [],
//       loading: false,
//     };
//   }

//   handleSearch = async searchValue => {
//     this.setState({ loading: true });
//     const response = await fetchPicture(searchValue);
//     const images = response.hits;
//     this.setState({
//       images,
//       searchValue,
//       lastLoadedImages: images,
//       loading: false,
//     });
//   };

//   handleLoadMore = async () => {
//     const { searchValue, images } = this.state;

//     if (images.length !== 0) {
//       this.setState({ loading: true });
//       const response = await fetchPicture(
//         searchValue,
//         Math.ceil(images.length / 12) + 1
//       );
//       const newImages = response.hits;

//       this.setState(prevState => ({
//         images: [...prevState.images, ...newImages],
//         loading: false,
//       }));
//     }
//   };

//   // handleImageClick = image => {
//   //   this.setState({ selectedImage: image });
//   // };

//   // handleCloseModal = () => {
//   //   this.setState({ selectedImage: null });
//   // };

//   render() {
//     const { images, loading, image } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearch} />
//         <ImageGallery
//           images={images}

//           // onClick={this.handleImageClick}
//         />
//         <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />
//         {loading && <CustomProgressBar />}
//         {<Modal image={image} />}
//       </>
//     );
//   }
// }

// export { App };
import React, { Component } from 'react';
import { fetchPicture } from '../api/Api.js';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery.js';
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
      selectedImage: null, // Додано поле для відстеження обраного зображення
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
    });
  };

  handleLoadMore = async () => {
    const { searchValue, images } = this.state;

    if (images.length !== 0) {
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

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onClick={this.handleImageClick} />
        <ButtonLoadMore buttonLoadMore={this.handleLoadMore} />
        {loading && <CustomProgressBar />}
        {selectedImage && (
          <Modal image={selectedImage} closeModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export { App };
