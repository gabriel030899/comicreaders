  // Obtenha o elemento de entrada e a lista
  const searchBarInput = document.getElementById('search-bar-input');
  const searchedList = document.getElementById('searched-list');

  // Adicione um ouvinte de evento de foco (focus) ao campo de entrada
  searchBarInput.addEventListener('focus', updateVisibility);
  
  // Adicione um ouvinte de evento de desfoco (blur) ao campo de entrada
  searchBarInput.addEventListener('blur', updateVisibility);
  
  // Adicione um ouvinte de evento de input ao campo de entrada
  searchBarInput.addEventListener('input', updateVisibility);

  function updateVisibility() {
    // Verifique se o campo de entrada tem conteúdo e está focado
    if (searchBarInput.value.trim() !== '' && searchBarInput === document.activeElement) {
      // Se houver conteúdo e o campo de entrada estiver focado, mostre a lista
      searchedList.style.display = 'block';
    } else {
      // Caso contrário, oculte a lista
      searchedList.style.display = 'none';
    }
  }