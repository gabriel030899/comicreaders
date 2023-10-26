
        // Suponha que você tenha uma lista de produtos
        import { products } from './all-products.js';


        // Função para criar os elementos HTML dos produtos
        function createProductElement(product) {
            const productDiv = document.createElement("div");
            productDiv.className = "search-product";

            const productInfoDiv = document.createElement("div");
            productInfoDiv.className = "search-product-info";


            const productInfoLinkDiv = document.createElement("div");
            productInfoLinkDiv.className = "search-product-info-link";

            const productImage = document.createElement("img");
            productImage.src = product.image;

            const productTitle = document.createElement("h3");
            productTitle.textContent = product.title;

            const productauthor = document.createElement("p");
            productauthor.textContent = product.author;

            const productBrand = document.createElement("p");
            productBrand.textContent = product.brand;

            const productLink = document.createElement("a");
            productLink.href = product.link;
            productLink.textContent = "Ver na Amazon";
            productLink.target = "_blank";

            productDiv.appendChild(productImage);
            productDiv.appendChild(productInfoLinkDiv);
            productInfoLinkDiv.appendChild(productInfoDiv);
            productInfoDiv.appendChild(productTitle);
            productInfoDiv.appendChild(productauthor);
            productInfoDiv.appendChild(productBrand);
            productInfoLinkDiv.appendChild(productLink);

            return productDiv;
        }
        
    // Função para atualizar a lista de produtos com base na consulta
    function updateProductList(query) {
        const searchBarItems = document.querySelector("#searched-list");
        searchBarItems.innerHTML = ""; // Limpe a lista atual
    
        products.forEach(product => {
            if (product && product.topSeller) { // Verifica se o objeto product é definido
                const productInfo = [
                    product.title,
                    product.author,
                    product.brand
                ].map(info => info ? info.toLowerCase() : "").join(" "); // Verifica se os campos estão definidos
    
                if (productInfo.includes(query)) {
                    const productElement = createProductElement(product);
                    searchBarItems.appendChild(productElement);
                }
            }
        });
    }

    // Adicione um ouvinte de eventos ao campo de entrada
    const searchInput = document.querySelector("#search-bar-input");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase(); // Obtenha o valor do campo de entrada e converta para minúsculas
        updateProductList(query);
    });

    // Inicialize a lista com todos os produtos topSeller
    updateProductList("");