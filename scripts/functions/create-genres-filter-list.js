export function createGenresElement(genre) {
    const genreLi = document.createElement("li");
    genreLi.className = "genres-li";

    // Crie um rótulo para a caixa de seleção
    const label = document.createElement("label");

    // Crie a caixa de seleção
    const productInput = document.createElement("input");
    productInput.type = "checkbox";
    productInput.name = genre.name;
    productInput.className = "genres-inputs";
    productInput.id = "genres-"+ genre.name;

    // Anexe a caixa de seleção e o texto ao rótulo
    label.appendChild(productInput);
    label.appendChild(document.createTextNode(genre.title));

    // Anexe o rótulo à lista
    genreLi.appendChild(label);

    return genreLi;
}