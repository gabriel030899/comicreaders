
        import { books } from './books-gallery.js';

        import { createProductElement } from './create-books-gallery.js';

        // Adicione produtos à galeria
        const topSellersBooksGallery = document.querySelector("#top-sellers-books");
        
        books.forEach(product => {
            if( product.topSeller){
            const productElement = createProductElement(product);
            topSellersBooksGallery.appendChild(productElement);
            }
        });