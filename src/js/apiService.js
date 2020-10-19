import { notice } from '@pnotify/core';
import loadMoreBtn from './loadMoreBtn';

const apiKey = '18661870-79eb159249f519a0733d37bbc';
export default {
  options: {
    method: 'GET',
  },

  searchQuery: '',
  page: 1,
  totalImages: '',

  async fetchPhotos() {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`,
        this.options,
      );
      const { hits, total } = await response.json();
      if (!hits.length) {
        loadMoreBtn.disable();
        loadMoreBtn.hide();
        return;
      }
      if (!total) return notice('Wrong query! Please try again');
      return { hits, total };
    } catch (error) {
      throw error;
    }
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
