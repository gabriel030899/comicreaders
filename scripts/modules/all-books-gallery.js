
        import { products } from '../lists/all-products.js';

        import { createBooksElement } from '../functions/create-books-gallery.js';

        // Adicione produtos à galeria
        const topSellersBooksGallery = document.querySelector("#top-sellers-books");
        
        products.forEach(product => {
            if( product.topSeller && product.itemType === "book"){
            const productElement = createBooksElement(product);
            topSellersBooksGallery.appendChild(productElement);
            }
        });