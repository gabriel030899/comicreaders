// Obtenha o elemento de entrada e a lista
const searchBarInput = document.getElementById('search-bar-input');
const searchedList = document.getElementById('searched-list');

// Mantenha a lista visível quando o campo de entrada é clicado
searchBarInput.addEventListener('click', (event) => {
  updateVisibility();
  event.stopPropagation();
});

// Adicione um ouvinte de evento de clique no documento (body)
document.addEventListener('click', (event) => {
  if (event.target !== searchBarInput && event.target !== searchedList) {
    // Se o clique não foi no campo de entrada nem na lista, oculte a lista
    searchedList.style.display = 'none';
  }
});

// Adicione um ouvinte de evento de foco (focus) ao campo de entrada
searchBarInput.addEventListener('focus', () => {
  updateVisibility();
});

// Adicione um ouvinte de evento de input ao campo de entrada
searchBarInput.addEventListener('input', () => {
  updateVisibility();
});

// Adicione um ouvinte de evento de clique à lista para mantê-la visível
searchedList.addEventListener('click', (event) => {
  event.stopPropagation();
});

function updateVisibility() {
  // Verifique se o campo de entrada está focado e tem um valor
  if (searchBarInput === document.activeElement && searchBarInput.value.trim() !== '') {
    // Se o campo de entrada estiver focado e tiver conteúdo, mostre a lista
    searchedList.style.display = 'block';
  } else {
    // Caso contrário, oculte a lista
    searchedList.style.display = 'none';
  }
}