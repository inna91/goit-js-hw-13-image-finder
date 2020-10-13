import updatePhotosMarkup from './js/updateMarkup';
import refs from './js/refs';
import apiService from './js/apiService';
import viewPnotify from './js/pnotify';
import 'material-design-icons/iconfont/material-icons.css';
import loadMoreBtn from './js/loadMoreBtn';
import './styles.css';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchPhotos);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  apiService.query = event.target.query.value;
  clearGalleryContainer();

  apiService.resetPage();

  fetchPhotos();
}

function fetchPhotos() {
  loadMoreBtn.disable();

  apiService
    .fetchPhotos()
    .then(photos => {
      updatePhotosMarkup(photos);
      loadMoreBtn.show();
      loadMoreBtn.enable();
      totalNumber(photos);
      viewPnotify(apiService.page);
      apiService.incrementPage();

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .catch(error => console.log(error));
}

function totalNumber(photos) {
  apiService.totalImages = photos.total;
}

function clearGalleryContainer() {
  refs.gallery.innerHTML = '';
}
