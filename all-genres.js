
import { genres } from './genres-list.js';

import { createGenresElement } from './create-genres-filter-list.js';

// Adicione produtos à galeria
const genresGallery = document.querySelector(".genres");

genres.forEach(genre => {
    const productElement = createGenresElement(genre);
    genresGallery.appendChild(productElement);
});