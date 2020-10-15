import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import apiService from './apiService';

export default function allPhotos() {
  info({
    text: `All found: ${apiService.totalImages}`,
    delay: 1000,
  });
}
