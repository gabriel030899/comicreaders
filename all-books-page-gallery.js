// Importar dados de produtos e funções auxiliares
import { products } from './all-products.js';
import { createBooksElement } from './create-books-page-gallery.js';

// Configuração inicial
const itemsPerPage = 20;
let currentPage = 1;
const bookGallery = document.querySelector(".products-show");
const actualPage = document.getElementById('currentPage');
const totalPages = Math.ceil(products.length / itemsPerPage);
actualPage.textContent = currentPage + " - " + totalPages;

// Objeto para rastrear os filtros selecionados
const filters = {
    genres: [],
    newcomes: [],
    formats: [],
    languages: [],
    prices: [],
};

// Função para filtrar os produtos com base nos filtros selecionados
function filterProducts() {
    const filteredProducts = products.filter(product => {
        const matchGenres = filters.genres.length === 0 || filters.genres.includes(product.genre);
        const matchNewcomes = filters.newcomes.length === 0 || filters.newcomes.includes(product.newcome);
        const matchFormats = filters.formats.length === 0 || filters.formats.includes(product.format);
        const matchLanguages = filters.languages.length === 0 || filters.languages.indexOf(product.language) !== -1;
        const matchPrices = filters.prices.length === 0 || filters.prices.includes(product.priceRange);

        const matchItemType = product.itemType === "book";

        return matchGenres && matchNewcomes && matchFormats && matchLanguages && matchPrices && matchItemType;
    });

    return filteredProducts;
}

// Função para renderizar produtos na página
function renderProducts() {
    const filteredProducts = filterProducts();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    bookGallery.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        if (product.itemType === "book") {
            const productElement = createBooksElement(product);
            bookGallery.appendChild(productElement);
        }
    }

    // Verificar se deve esconder os botões de próxima página e página anterior
    if (filteredProducts.length <= itemsPerPage) {
        nextPageBtn.style.display = 'none'; // Esconde o botão "Próxima"
        prevPageBtn.style.display = 'none'; // Esconde o botão "Anterior"
        actualPage.style.display = 'none';   // Esconde o índice de páginas
    } else {
        nextPageBtn.style.display = 'inline-block'; // Exibe o botão "Próxima"
        prevPageBtn.style.display = 'inline-block'; // Exibe o botão "Anterior"
        actualPage.style.display = 'inline-block';   // Exibe o índice de páginas
    }

}



// Função para navegar para uma página específica
function goToPage(page) {
    if (page >= 1 && page <= Math.ceil(products.length / itemsPerPage)) {
        currentPage = page;
        renderProducts();
    }
}

// Função para ir para a página anterior
function previousPage() {
    goToPage(currentPage - 1);
    actualPage.textContent = currentPage + " - " + totalPages;
}

// Função para ir para a próxima página
function nextPage() {
    goToPage(currentPage + 1);
    actualPage.textContent = currentPage + " - " + totalPages;
}

// Obter botões de página anterior e próxima
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

// Adicionar ouvintes de eventos aos botões
prevPageBtn.addEventListener('click', previousPage);
nextPageBtn.addEventListener('click', nextPage);



// Adicionar ouvintes de eventos para caixas de seleção (checkboxes) GENRES
document.querySelectorAll('.genres input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            filters.genres.push(this.name); // Use this.name para obter o "name" do checkbox
        } else {
            const index = filters.genres.indexOf(this.name);
            if (index !== -1) {
                filters.genres.splice(index, 1);
            }
        }
        renderProducts();
    });
});

// Adicionar ouvintes de eventos para caixas de seleção (checkboxes) NEW COME
document.querySelectorAll('.newcomes-filters input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            filters.newcomes.push(this.name); // Use this.name para obter o "name" do checkbox
        } else {
            const index = filters.newcomes.indexOf(this.name);
            if (index !== -1) {
                filters.newcomes.splice(index, 1);
            }
        }
        renderProducts();
    });
});

// Adicionar ouvintes de eventos para caixas de seleção (checkboxes) FORMAT
document.querySelectorAll('.format-filters input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            filters.formats.push(this.name); // Use this.name para obter o "name" do checkbox
        } else {
            const index = filters.formats.indexOf(this.name);
            if (index !== -1) {
                filters.formats.splice(index, 1);
            }
        }
        renderProducts();
    });
});

// Adicionar ouvintes de eventos para caixas de seleção (checkboxes) LANGUAGE
document.querySelectorAll('.language-filters input').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            filters.languages.push(this.name); // Use this.name para obter o "name" do checkbox
        } else {
            const index = filters.languages.indexOf(this.name);
            if (index !== -1) {
                filters.languages.splice(index, 1);
            }
        }
        renderProducts();
    });
});


// Inicialize a galeria com a primeira página
renderProducts();