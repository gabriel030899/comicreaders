// Referência ao banco de dados de livros (substitua pelo seu banco de dados real)
import { products } from '../lists/all-products.js';
import { createBooksElement } from '../functions/create-book-selected-info.js';


// Referência ao elemento de pesquisa para a primeira div
const searchInputOne = document.getElementById('searchInputOne');
// Referência à lista de opções para a primeira div
const optionsListOne = document.getElementById('optionsListOne');

// Referência ao elemento de pesquisa para a segunda div
const searchInputTwo = document.getElementById('searchInputTwo');
// Referência à lista de opções para a segunda div
const optionsListTwo = document.getElementById('optionsListTwo');



// Inicialize objetos para os produtos escolhidos em cada entrada
let selectedProductOne = null;
let selectedProductTwo = null;

// Função para preencher a lista de opções com base no valor de pesquisa
function fillOptionsList(searchValue, optionsList, searchInput) {
    const matchingBooks = products.filter(product =>
        product.itemType === 'book' && product.title.toLowerCase().includes(searchValue)
    );

    optionsList.innerHTML = '';

    matchingBooks.forEach(book => {
        const option = document.createElement('div');
        option.className = 'option';

        // Crie a imagem do livro
        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;
        option.appendChild(bookImage);

        // Crie o nome do livro
        const bookName = document.createElement('span');
        bookName.textContent = book.title;
        option.appendChild(bookName);

        option.addEventListener('click', () => {
            searchInput.value = book.title;
            optionsList.style.display = 'none';

            // Atualize o produto selecionado com base na entrada
            if (searchInput === searchInputOne) {
                selectedProductOne = book;
            } else if (searchInput === searchInputTwo) {
                selectedProductTwo = book;
            }

            // Verifique se ambos os produtos foram selecionados e chame a função para combiná-los
            if (selectedProductOne && selectedProductTwo) {
                combineSelectedProducts();
            }
        });

        optionsList.appendChild(option);
    });

    if (matchingBooks.length > 0) {
        optionsList.style.display = 'block';
    } else {
        optionsList.style.display = 'none';
    }
}

// Evento para lidar com a entrada no campo de pesquisa da primeira div
searchInputOne.addEventListener('input', () => {
    const searchValue = searchInputOne.value.toLowerCase();
    fillOptionsList(searchValue, optionsListOne, searchInputOne);
});

// Evento para lidar com a entrada no campo de pesquisa da segunda div
searchInputTwo.addEventListener('input', () => {
    const searchValue = searchInputTwo.value.toLowerCase();
    fillOptionsList(searchValue, optionsListTwo, searchInputTwo);
});

// Evento para fechar a lista de opções se clicar fora para a primeira div
window.addEventListener('click', (event) => {
    if (!optionsListOne.contains(event.target) && event.target !== searchInputOne) {
        optionsListOne.style.display = 'none';
    }
});

// Evento para fechar a lista de opções se clicar fora para a segunda div
window.addEventListener('click', (event) => {
    if (!optionsListTwo.contains(event.target) && event.target !== searchInputTwo) {
        optionsListTwo.style.display = 'none';
    }
});


function combineSelectedProducts() {
    const bookSuggestionGallery = document.querySelector(".suggested-books");
    bookSuggestionGallery.innerHTML = ''; // Isso remove todos os elementos filhos da galeria

    if (selectedProductOne && selectedProductTwo) {
        const authorOne = selectedProductOne.author;
        const genresOne = Array.isArray(selectedProductOne.genre) ? selectedProductOne.genre : [selectedProductOne.genre];
        const authorTwo = selectedProductTwo.author;
        const genresTwo = Array.isArray(selectedProductTwo.genre) ? selectedProductTwo.genre : [selectedProductTwo.genre];

        // Função para calcular a prioridade com base nas regras de prioridade
        function calculatePriority(product) {
            const { author, genre } = product;

            const hasMatchingAuthor = author === authorOne || author === authorTwo;
            const hasMatchingGenre = Array.isArray(genre) && (genre.some(g => genresOne.includes(g) || genresTwo.includes(g)));

            if (hasMatchingAuthor && hasMatchingGenre) {
                return 1; // Melhor prioridade se combinar gênero e autor de ambos
            } else if (hasMatchingAuthor || hasMatchingGenre) {
                return 2; // Segunda melhor prioridade se combinar gênero de um ou autor de um
            }

            return 3; // Pior prioridade por padrão
        }

        // Filtrar os produtos com base nas prioridades especificadas
        const matchingProducts = products.filter(product =>
            product.itemType === 'book' &&
            product.title !== selectedProductOne.title &&
            product.title !== selectedProductTwo.title &&
            (
                (authorOne === product.author || authorTwo === product.author) ||
                (Array.isArray(product.genre) && product.genre.some(g => genresOne.includes(g) || genresTwo.includes(g)))
            )
        );

        // Calcular as prioridades para os produtos
        const productsWithPriorities = matchingProducts.map(product => ({
            ...product,
            priority: calculatePriority(product),
        }));

        // Ordene os produtos com base nas prioridades
        productsWithPriorities.sort((a, b) => a.priority - b.priority);

        // Obtenha os 10 primeiros produtos
        const maxProductsToShow = Math.min(6, productsWithPriorities.length);

        const topMatchingProducts = productsWithPriorities.slice(0, maxProductsToShow);

        // Faça o que quiser com os produtos combinados
        console.log(topMatchingProducts);

        // Adicione produtos à galeria
        const bookSuggestionGallery = document.querySelector(".suggested-books");

        topMatchingProducts.forEach(product => {
            const productElement = createBooksElement(product);
            bookSuggestionGallery.appendChild(productElement);
        });
    } else {
        console.log('Selecione dois livros para combinar.');
    }
}



