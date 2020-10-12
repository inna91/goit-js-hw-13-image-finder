import galleryItemTpl from '../templates/photos.hbs';
import refs from './refs';

function updatePhotosMarkup(hits) {
  const markup = galleryItemTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updatePhotosMarkup;
