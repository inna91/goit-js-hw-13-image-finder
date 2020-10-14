import updatePhotosMarkup from './js/updateMarkup';
import { notice } from '@pnotify/core';
import { error } from '@pnotify/core';
import refs from './js/refs';
import apiService from './js/apiService';
import AllPhotos from './js/pnotify';
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
  AllPhotos();
}

function fetchPhotos() {
  loadMoreBtn.disable();

  apiService
    .fetchPhotos()
    .then(photos => {
      if (!photos) return notice('Wrong query! Please try again');
      updatePhotosMarkup(photos);
      loadMoreBtn.show();
      loadMoreBtn.enable();
      totalNumber(photos);
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
