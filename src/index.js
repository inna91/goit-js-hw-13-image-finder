import updatePhotosMarkup from './js/updateMarkup';
import { error } from '@pnotify/core';
import refs from './js/refs';
import apiService from './js/apiService';
import allPhotos from './js/pnotify';
import 'material-design-icons/iconfont/material-icons.css';
import loadMoreBtn from './js/loadMoreBtn';
import './styles.css';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchPhotos);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  apiService.resetPage();
  apiService.query = event.target.query.value;
  clearGalleryContainer();

  allPhotos();

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
      apiService.incrementPage();

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .catch(err => console.log(error));
}

function totalNumber(photos) {
  apiService.totalImages = photos.total;
}

function clearGalleryContainer() {
  refs.gallery.innerHTML = '';
}
