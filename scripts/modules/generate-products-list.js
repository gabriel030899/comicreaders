// Referência ao banco de dados de livros (substitua pelo seu banco de dados real)
import { products } from '../lists/all-products.js';

// Função para extrair e listar os títulos dos produtos
function listProductTitles() {
    const titles = products.map(product => product.title);
    return titles;
}

// Captura a lista de títulos
const productTitles = listProductTitles();

// Exibe a lista de títulos no console
console.log(productTitles);