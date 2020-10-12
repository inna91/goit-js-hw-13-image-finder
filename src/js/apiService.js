const apiKey = '18661870-79eb159249f519a0733d37bbc';

export default {
  searchQuery: '',
  page: 1,

  fetchPhotos() {
    const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(baseUrl)
      .then(response => response.json)
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
    // .catch(error => error);
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
