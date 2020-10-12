import updatePhotosMarkup from './js/updateMarkup';
import refs from './js/refs';
import apiService from './js/apiService';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset;

  apiService.resetPage();

  apiService.fetchPhotos().then(photos => {
    updatePhotosMarkup(photos);
  });
}

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchPhotos().then(photos => {
    updatePhotosMarkup(photos);
  });
});
