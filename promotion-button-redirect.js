// Selecione o elemento da opção "Black Friday" pelo ID
const promotionButton = document.getElementById('promotionButton');

// Adicione um evento de clique à opção "Black Friday"
promotionButton.addEventListener('click', function() {
    // Defina a variável com o valor "Black Friday"
    const promotionValue = 'Black Friday';

    // Redirecione o usuário para a outra página com a variável na URL
    window.location.href = 'products-search-page.html?promotion=' + encodeURIComponent(promotionValue);
});