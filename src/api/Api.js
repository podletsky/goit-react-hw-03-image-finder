import axios from 'axios';

export const fetchPicture = async (searchValue, page = 1, perPage = 12) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchValue}&key=35755370-cb3790e9babc7c8bcf3805309&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`
  );

  return response.data;
};
