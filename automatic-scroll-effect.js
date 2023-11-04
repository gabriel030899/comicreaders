// Obtenha uma referência ao elemento #trending-books
const trendingBooksGallery = document.getElementById("trending-books");

// Defina a largura de um item (ajuste de acordo com a largura dos itens)
const itemWidth = 242; // Substitua pelo valor apropriado

// Defina a velocidade do scroll
const scrollSpeed = itemWidth; // Agora o scroll move a largura de um item por vez

// Defina o intervalo para o scroll automático (3 segundos = 3000 milissegundos)
const scrollInterval = 10000;

// Função para realizar o scroll
function performScroll() {
  // Animação de scroll
  trendingBooksGallery.scrollLeft += scrollSpeed;

  // Verifique se atingiu o final
  if (trendingBooksGallery.scrollLeft >= (trendingBooksGallery.scrollWidth - trendingBooksGallery.clientWidth)) {
    trendingBooksGallery.scrollLeft = 0;
  }
}

// Inicie o scroll automático a cada 3 segundos
let scrollIntervalId = setInterval(performScroll, scrollInterval);

// Pare o scroll automático quando o mouse estiver sobre a galeria
trendingBooksGallery.addEventListener("mouseenter", () => {
  clearInterval(scrollIntervalId);
});

// Retome o scroll automático quando o mouse sair da galeria
trendingBooksGallery.addEventListener("mouseleave", () => {
  scrollIntervalId = setInterval(performScroll, scrollInterval);
});