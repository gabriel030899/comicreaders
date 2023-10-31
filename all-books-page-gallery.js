
import { products } from './all-products.js';

import { createBooksElement } from './create-books-page-gallery.js';


const itemsPerPage = 25;
let currentPage = 1;
const bookGallery = document.querySelector(".products-show");
const actualPage = document.getElementById('currentPage');
const totalPages = Math.ceil(products.length / itemsPerPage);
actualPage.textContent = currentPage + " - " + totalPages;


// Adicione um objeto para rastrear os filtros selecionados
const filters = {
    genres: [],
    newcomes: [],
    formats: [],
    languages: [],
    prices: [],
};

function filterProducts() {
    const filteredProducts = products.filter(product => {
        const matchGenres = filters.genres.length === 0 || filters.genres.includes(product.genre);
        const matchNewcomes = filters.newcomes.length === 0 || filters.newcomes.includes(product.newcome);
        const matchFormats = filters.formats.length === 0 || filters.formats.includes(product.format);
        const matchLanguages = filters.languages.length === 0 || filters.languages.includes(product.language);
        const matchPrices = filters.prices.length === 0 || filters.prices.includes(product.priceRange);

        return matchGenres && matchNewcomes && matchFormats && matchLanguages && matchPrices;
    });

    return filteredProducts;
}


// Atualize a função de renderização para usar os produtos filtrados
function renderProducts() {
    const filteredProducts = filterProducts();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);

    bookGallery.innerHTML = '';

    for (let i = startIndex; i < endIndex; i++) {
        const product = filteredProducts[i];
        if (product.itemType === "book") {
            const productElement = createBooksElement(product);
            bookGallery.appendChild(productElement);
        }
    }
}

function goToPage(page) {
    if (page >= 1 && page <= Math.ceil(products.length / itemsPerPage)) {
        currentPage = page;
        renderProducts();
    }
}

function previousPage() {
    goToPage(currentPage - 1);
    actualPage.textContent = currentPage + " - " + totalPages;
}

function nextPage() {
    goToPage(currentPage + 1);
    actualPage.textContent = currentPage + " - " + totalPages;
}

const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');


prevPageBtn.addEventListener('click', previousPage);
nextPageBtn.addEventListener('click', nextPage);

// Adicione event listeners para os checkboxes
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

    

// Inicialize a galeria com a primeira página
renderProducts();



/* 
products.forEach(product => {
    if(product.itemType === "book"){
    const productElement = createBooksElement(product);
    bookGallery.appendChild(productElement);
    }
}); */