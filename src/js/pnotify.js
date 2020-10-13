import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import apiService from './apiService';
import { error } from '@pnotify/core';

export default function AllPhotos() {
  info({
    text: `All found: ${apiService.totalImages}`,
    delay: 500,
  });
}
