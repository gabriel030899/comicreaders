
        // Suponha que você tenha uma lista de produtos
        const accessories = [
            {
                title: "Newmind Luminária",
                image: "accessories/luminaria-newmind.jpg",
                brand: "Newmind",
                link: "https://amzn.to/405Dh9v",
                topSeller: true
            },
            {
                title: "Apoio de leitura",
                image: "accessories/apoiodeleitura-elegance.jpg",
                brand: "Elegance",
                link: "https://amzn.to/490vaPH",
                topSeller: true
            },
            {
                title: "Luminária de mesa",
                image: "accessories/luminariademesa-luatek.jpg",
                brand: "Luatek",
                link: "https://amzn.to/3FveZw0",
                topSeller: true
            },
            {
                title: "Luminário portátil de página",
                image: "accessories/luminariaportatilpagina-moverstar.jpg",
                brand: "Moverstar",
                link: "https://amzn.to/40bkg5F",
                topSeller: true
            },
            {
                title: "Luminária de Pescoço",
                image: "accessories/luminariadepescoco-junkai.jpg",
                brand: "Junkai",
                link: "https://amzn.to/3tMsXXX",
                topSeller: true
            },
            {
                title: "Suporte de livros",
                image: "accessories/suportedelivros-acrimet.jpg",
                brand: "Acrimet",
                link: "https://amzn.to/40b5QCq",
                topSeller: true
            },
            {
                title: "Marcador de página Post-It",
                image: "accessories/marcadordepaginapostit-3m.jpg",
                brand: "3M",
                link: "https://amzn.to/3s5iHJK",
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
     
        
    

  