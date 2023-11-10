import { products } from '../lists/all-products.js';
import { createBooksElement } from '../lists/create-books-gallery.js';

// Adicione produtos à galeria
const topSellersBooksGallery = document.querySelector("#trending-books");

// Filtrar e ordenar produtos com título definido e com base no título (suponha que o título do produto esteja na propriedade "title")
const sortedProducts = products
  .filter(product => product.trendingBook && product.itemType === "book" && product.title)
  .sort((a, b) => a.title.localeCompare(b.title));

sortedProducts.forEach(product => {
    const productElement = createBooksElement(product);
    topSellersBooksGallery.appendChild(productElement);
});