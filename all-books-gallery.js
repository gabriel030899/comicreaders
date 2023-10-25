
        // Suponha que você tenha uma lista de produtos
        const books = [
            {
                title: "Clean Code",
                image: "books/cleancode-robertcmartin.jpg",
                author: "Robert C Martin",
                link: "https://amzn.to/3MBjnOf",
                topSeller: true
            },
            {
                title: "Pai Rico, Pai Pobre",
                image: "books/pairicopaipobre-roberttkiyosaki.jpg",
                author: "Robert T. Kiyosaki",
                link: "https://amzn.to/3tL6ESq",
                topSeller: true
            },
            {
                title: "Nação Dopamina",
                image: "books/nacaodopamina-draannalembke.jpg",
                author: "Dra. Anna Lembke",
                link: "https://amzn.to/46IbG0y",
                topSeller: true
            },
            {
                title: "101 Primeiros Desenhos",
                image: "books/101primeirosdesenhos-cirandacultural.jpg",
                author: "Ciranda Cultural",
                link: "https://amzn.to/3QcKb86",
                topSeller: true
            },
            {
                title: "A Mulher em Mim",
                image: "books/amulheremmim-britneyspears.jpg",
                author: "Britney Spears",
                link: "https://amzn.to/45DwPYo",
                topSeller: true
            },
            {
                title: "A Biblioteca da Meia-Noite",
                image: "books/abibliotecadameianoite-matthaig.jpg",
                author: "Matt Haig",
                link: "https://amzn.to/3rVqTMN",
                topSeller: true
            },
            {
                title: "Todas as suas (im)perfeições",
                image: "books/todasassuasimperfecoes-colleenhoover.jpg",
                author: "Colleen Hoover",
                link: "https://amzn.to/40oPXIR",
                topSeller: true
            }
            
        ];

        // Função para criar os elementos HTML dos produtos
        function createProductElement(product) {
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

        // Adicione produtos à galeria
        const topSellersBooksGallery = document.querySelector("#top-sellers-books");
        
        books.forEach(product => {
            if( product.topSeller){
            const productElement = createProductElement(product);
            topSellersBooksGallery.appendChild(productElement);
            }
        });
     
        
    

  