
import { specialCategories } from './special-categories-list.js';

import { createCategoriesElement } from './create-categories-filter-list.js';

// Adicione produtos à galeria
const specialCategoyGallery = document.querySelector(".special-categories");

specialCategories.forEach(category => {
    const productElement = createCategoriesElement(category);
    specialCategoyGallery.appendChild(productElement);
});