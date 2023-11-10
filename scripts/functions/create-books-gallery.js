export  function    createBooksElement(product) {
                const productDiv = document.createElement("div");
                productDiv.className = "product";

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
                productDiv.appendChild(productTitle);
                productDiv.appendChild(productauthor);
                productDiv.appendChild(productLink);

                return productDiv;
            }
