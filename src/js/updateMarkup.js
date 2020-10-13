import galleryItemTpl from '../templates/photos.hbs';
import refs from './refs';

function updatePhotosMarkup(photos) {
  const markup = galleryItemTpl(photos.hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updatePhotosMarkup;
