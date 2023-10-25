
        // Suponha que você tenha uma lista de produtos
        import { products } from './all-products.js';


        // Função para criar os elementos HTML dos produtos
        function createProductElement(product) {
            const productDiv = document.createElement("div");
            productDiv.className = "search-product";

            const productInfoDiv = document.createElement("div");
            productInfoDiv.className = "search-product-info";

            const productImage = document.createElement("img");
            productImage.src = product.image;

            const productTitle = document.createElement("h3");
            productTitle.textContent = product.title;

            const productauthor = document.createElement("p");
            productauthor.textContent = product.author;

            const productLink = document.createElement("a");
            productLink.href = product.link;
            productLink.textContent = "Ver na Amazon";
            productLink.target = "_blank";

            productDiv.appendChild(productImage);
            productDiv.appendChild(productInfoDiv);
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productauthor);
            productDiv.appendChild(productLink);

            return productDiv;
        }
        
    // Adicione produtos à galeria
    const searchBarItems = document.querySelector("#searched-list");
        
    products.forEach(product => {
        if( product.topSeller && product.itemType === "book"){
        const productElement = createProductElement(product);
        searchBarItems.appendChild(productElement);
        }
    });