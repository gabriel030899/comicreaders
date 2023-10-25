
        import { accessories } from './accessories.js';

        // Função para criar os elementos HTML dos produtos
        function createProductElement(product) {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const productImage = document.createElement("img");
            productImage.src = product.image;

            const productTitle = document.createElement("h3");
            productTitle.textContent = product.title;

            const productBrand = document.createElement("p");
            productBrand.textContent = product.brand;

            const productLink = document.createElement("a");
            productLink.href = product.link;
            productLink.textContent = "Ver na Amazon";
            productLink.target = "_blank";

            productDiv.appendChild(productImage);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productBrand);
            productDiv.appendChild(productLink);

            return productDiv;
        }

        // Adicione produtos à galeria
        const topSellersAccessoriesGallery = document.querySelector("#top-sellers-accessories");
        
        accessories.forEach(product => {
            if( product.topSeller){
            const productElement = createProductElement(product);
            topSellersAccessoriesGallery.appendChild(productElement);
            }
        });
     
        
    

  