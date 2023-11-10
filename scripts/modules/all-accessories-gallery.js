
        import { products } from '../lists/all-products.js';
        
        import { createAccessoriesElement } from '../functions/create-accessories-gallery.js';
        

        // Adicione produtos à galeria
        const topSellersAccessoriesGallery = document.querySelector("#top-sellers-accessories");
        
        products.forEach(product => {
            if( product.topSeller && product.itemType === "accessory"){
            const productElement = createAccessoriesElement(product);
            topSellersAccessoriesGallery.appendChild(productElement);
            }
        });
     
        
    

  