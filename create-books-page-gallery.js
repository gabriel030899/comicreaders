// CRIAR MODAL DO PRODUTO SELECIONADO
export function    createSelectedProduct(product) {
    
    const productDiv = document.createElement("div");
    productDiv.className = "productSelected";

    const productImage = document.createElement("img");
    productImage.src = product.image;

    const productTitleInfo = document.createElement("div");
    productTitleInfo.className = "productInfo";

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;

    const productauthor = document.createElement("p");
    productauthor.textContent = "por " + product.author + " (Autor)";

    const descriptionParagraph = document.createElement("h4");
    descriptionParagraph.textContent = "Descrição: ";

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDescription.id = "productDescription";

    const productPrices = document.createElement("div");
    productPrices.className = "productPrices";

    const productBuy = document.createElement("div");
    productBuy.className = "productBuy";

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.className = "productPrice";
    productPrice.id = "productInfoPrice";

    const productOldPrice = document.createElement("p");
    productOldPrice.textContent = product.oldPrice;
    productOldPrice.className = "productOldPrice";
    productOldPrice.id = "productInfoOldPrice";

    const productStars = document.createElement("div");
    productStars.className = "classStars";
    productStars.id = "classStar";


    const classificationImage = document.createElement("img");
    classificationImage.src = "assets/icons/icons8-star-48.png";

    const productClassification = document.createElement("p");
    productClassification.textContent = product.classification;

    const productLink = document.createElement("a");
    productLink.href = product.link;
    productLink.target = "_blank";


    const buyHereButton = document.createElement("img");
    buyHereButton.src = "assets/buyNowAmazon.png";
    

    productDiv.appendChild(productImage);
    productDiv.appendChild(productTitleInfo);
    productTitleInfo.appendChild(productTitle);
    productTitleInfo.appendChild(productauthor);
    productTitleInfo.appendChild(productStars);
    productStars.appendChild(classificationImage);
    productStars.appendChild(productClassification);
    productTitleInfo.appendChild(descriptionParagraph);
    productTitleInfo.appendChild(productDescription);
    productDiv.appendChild(productBuy);
    productBuy.appendChild(productPrices);
    productPrices.appendChild(productPrice);
    productPrices.appendChild(productOldPrice);
    productBuy.appendChild(productLink);
    productLink.appendChild(buyHereButton);

    const productInfo = document.querySelector(".modalContent");

    productInfo.appendChild(productDiv);
};


//CRIAR ITENS NA GALERIA
export  function    createBooksElement(product) { 
    
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    

    const productPromotion = document.createElement("div");
    productPromotion.className = "promotion";

    if(product.promotion != ""){
        productPromotion.style.display = "flex";
    }else{
        productPromotion.style.display = "none";
    }
    
    if(product.promotion === "Black Friday"){
    productPromotion.style.backgroundColor = "#262626";
    productPromotion.style.color = "yellow";
    }else{
    productPromotion.style.backgroundColor = "#009bc2";
    }

    const promotionValue = document.createElement("p");
    promotionValue.textContent = product.promotion;

    const productImage = document.createElement("img");
    productImage.src = product.image;

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;

    const productauthor = document.createElement("p");
    productauthor.textContent = product.author;

    const productPrices = document.createElement("div");
    productPrices.className = "productPrices";

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.className = "productPrice";

    const productOldPrice = document.createElement("p");
    productOldPrice.textContent = product.oldPrice;
    productOldPrice.className = "productOldPrice";

    const productStars = document.createElement("div");
    productStars.className = "classStars";

    const classificationImage = document.createElement("img");
    classificationImage.src = "assets/icons/icons8-star-48.png";

    const productClassification = document.createElement("p");
    productClassification.textContent = product.classification;

    const productLink = document.createElement("a");
    productLink.href = "#"+product.title;
    productLink.textContent = "Mais detalhes";
    

    productDiv.appendChild(productPromotion);
    productPromotion.appendChild(promotionValue);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productauthor);
    productDiv.appendChild(productPrices);
    productPrices.appendChild(productPrice);
    productPrices.appendChild(productOldPrice);
    productDiv.appendChild(productStars);
    productStars.appendChild(classificationImage);
    productStars.appendChild(productClassification);
    productDiv.appendChild(productLink);


    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Adicione um ouvinte de evento para o elemento <a>
    productLink.addEventListener("click", function() {
        // Remova a propriedade 'id' de qualquer div que já tenha 'id' definido como 'selectedProduct'
        const selectedProductDiv = document.querySelector(".product#selectedProduct");
        if (selectedProductDiv) {
            selectedProductDiv.removeAttribute("id");
        }
        
        // Defina a propriedade 'id' como 'selectedProduct' para a div pai do elemento <a> clicado
        productDiv.setAttribute("id", "selectedProduct");

        modal.style.display = "block";

        createSelectedProduct(product)

        
    });

    


    closeModal.addEventListener("click", function() {
        modal.style.display = "none";

        // Selecione a div que deseja esvaziar (substitua 'divParaEsvaziar' pelo seletor correto)
        const divParaEsvaziar = document.querySelector('.modalContent');

        // Verifique se a div foi encontrada
        if (divParaEsvaziar) {
            // Remova todos os elementos filhos da div
            while (divParaEsvaziar.firstChild) {
                divParaEsvaziar.removeChild(divParaEsvaziar.firstChild);
            }
        }

    });


    return productDiv;
};


