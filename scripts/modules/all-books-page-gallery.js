// Importar dados de produtos e funções auxiliares
import { products } from '../lists/all-products.js';
import { createBooksElement } from '../functions/create-books-page-gallery.js';

// Configuração inicial
const itemsPerPage = 20;
let currentPage = 1;
const bookGallery = document.querySelector(".products-show");
const actualPage = document.getElementById('currentPage');
const totalPages = Math.ceil(products.length / itemsPerPage);
actualPage.textContent = currentPage + " - " + totalPages;


// Obter o valor da variável "promotion" da URL
const urlParams = new URLSearchParams(window.location.search);
let promotionValue = urlParams.get('promotion');

// Selecione o elemento da opção "Black Friday" pelo ID
const promotionButton = document.getElementById('promotionButton');

// Adicione um evento de clique à opção "Black Friday"
promotionButton.addEventListener('click', function() {
    // Defina a variável com o valor "Black Friday"
    let promotionValue = 'Black Friday';

    // Redirecione o usuário para a outra página com a variável na URL
    window.location.href = 'products-search-page.html?promotion=' + encodeURIComponent(promotionValue);
});


// Objeto para rastrear os filtros selecionados
const filters = {
    genres: [],
    newcomes: [],
    formats: [],
    languages: [],
    prices: [],
};

// Array para rastrear as opções de categorias especiais selecionadas
const selectedSpecialCategories = [];

// Ouvintes de eventos para as opções de streaming
document.querySelectorAll('.category-option').forEach(option => {
    option.addEventListener('click', function () {
        // Toggle na seleção da opção de categoria especial
        if (selectedSpecialCategories.includes(option.classList[0])) {
            const index = selectedSpecialCategories.indexOf(option.classList[0]);
            if (index !== -1) {
                selectedSpecialCategories.splice(index, 1);
            }
            option.classList.remove('selected-category'); // Remova a classe de destaque do elemento option
        } else {
            selectedSpecialCategories.push(option.classList[0]);
            option.classList.add('selected-category'); // Adicione a classe de destaque ao elemento option
        }
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
        renderProducts();
    });
});



// Array para rastrear as opções de streaming selecionadas
const selectedStreamings = [];

// Ouvintes de eventos para as opções de streaming
document.querySelectorAll('.streaming-option').forEach(option => {
    option.addEventListener('click', function () {
        // Toggle na seleção da opção de streaming
        if (selectedStreamings.includes(option.classList[0])) {
            const index = selectedStreamings.indexOf(option.classList[0]);
            if (index !== -1) {
                selectedStreamings.splice(index, 1);
            }
            option.querySelector('span').classList.remove('selected-streaming'); // Remova a classe de destaque
        } else {
            selectedStreamings.push(option.classList[0]);
            option.querySelector('span').classList.add('selected-streaming'); // Adicione a classe de destaque
        }
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
        renderProducts();
    });
});


// Função para detectar o input da barra de pesquisa
const searchBar = document.getElementById("search-bar-books-gallery");

searchBar.addEventListener("input", function () {
    const searchQuery = searchBar.value.toLowerCase();
    filters.searchQuery = searchQuery;
    currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
    actualPage.textContent = currentPage + " - " + totalPages;
    renderProducts();
});

// Função para filtrar os produtos com base nos filtros selecionados
function filterProducts() {
    const filteredProducts = products.filter(product => {
        // Verificar se product.genre é uma array ou converter em uma array
        const genres = Array.isArray(product.genre) ? product.genre : [product.genre];

        const matchGenres = filters.genres.length === 0 || (
            genres.some(selectedGenre => filters.genres.includes(selectedGenre))
        );
        const matchNewcomes = filters.newcomes.length === 0 || filters.newcomes.includes(product.newcome);
        const matchFormats = filters.formats.length === 0 || filters.formats.includes(product.format);
        const matchLanguages = filters.languages.length === 0 || filters.languages.indexOf(product.language) !== -1;
        const matchPrices = filters.prices.length === 0 || filters.prices.includes(product.priceRange);
        const matchItemType = product.itemType === "book";
        const matchSearchQuery = !filters.searchQuery || 
            (product.title && product.title.toLowerCase().includes(filters.searchQuery)) ||
            (product.author && product.author.toLowerCase().includes(filters.searchQuery)) ||
            (product.language && product.language.toLowerCase().includes(filters.searchQuery)) ||
            (product.format && product.format.toLowerCase().includes(filters.searchQuery)) ||
            (genres && genres.some(genre => genre.toLowerCase().includes(filters.searchQuery))); // Usando a variável "genres" em vez de "product.genre"

        // Check if product.streaming exists and is an array
        const matchStreaming = !product.streaming || (Array.isArray(product.streaming) && (
            selectedStreamings.length === 0 || product.streaming.some(s => selectedStreamings.includes(s))
        ));

        // Check if product.specialCategory exists and is an array
        const matchCategory = !product.specialCategory || (Array.isArray(product.specialCategory) && (
            selectedSpecialCategories.length === 0 || product.specialCategory.some(s => selectedSpecialCategories.includes(s))
        ));

        // Verificar o filtro com base na variável "promotion"
        const matchPromotion = promotionValue === null || product.promotion === promotionValue;

        return matchGenres && matchNewcomes && matchFormats && matchLanguages && matchPrices && matchItemType && matchSearchQuery && matchStreaming && matchCategory && matchPromotion;
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
    console.log(currentPage); // Adicione esta linha para depuração
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
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
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
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
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
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
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
        currentPage = 1; // Redefinir a página atual para 1 ao renderizar produtos
        actualPage.textContent = currentPage + " - " + totalPages;
        renderProducts();
    });
});

const filterNav = document.querySelector(".left-nav-filters");
const closeFilter = document.querySelector("#closeFilters");
const openFilter = document.querySelector("#filterIcon");

function updateFilterNavDisplay() {
    if (window.innerWidth > 1050) {
        filterNav.style.display = "flex";
    } else {
        filterNav.style.display = "none";
    }
}

openFilter.addEventListener("click", function() {
    filterNav.style.display = "flex";
    filterNav.style.animation = `filterNavFade 0.5s ease forwards 0.3s`;
});

closeFilter.addEventListener("click", function() {
    filterNav.style.display = "none";
});

// Verifique o tamanho da janela ao carregar a página e ao redimensionar
window.addEventListener("load", updateFilterNavDisplay);
/* window.addEventListener("resize", updateFilterNavDisplay);
 */


// Verifique se a página foi carregada com a variável "promotion"
if (promotionValue !== null) {
    // Defina a variável no texto do botão "Black Friday"
    promotionButton.querySelector('a').textContent = promotionValue;
}
// Verifique se a variável "promotion" existe e possui um valor
if (promotionValue !== null) {
    const promotionFilters = document.querySelector('.promotion-filters');
    
    // Crie o elemento <p>
    const promotionText = document.createElement('p');
    promotionText.textContent = promotionValue + " x";

    // Adicione o elemento <p> à div .promotion-filters
    promotionFilters.appendChild(promotionText);

    // Adicione um ouvinte de eventos para remover o valor da variável ao clicar no <p>
    promotionText.addEventListener('click', function() {
        // Remova o valor da variável
        promotionValue = null;

        // Remova o elemento <p> da div .promotion-filters
        promotionFilters.removeChild(promotionText);

        // Atualize a página para refletir a remoção do filtro
        window.location.href = 'products-search-page.html';
    });
}


// Inicialize a galeria com a primeira página
renderProducts();