export  function    createCategoriesElement(category) {

    const categoryLi = document.createElement("li");
    categoryLi.className = "special-category-li";
    
    const productImage = document.createElement("img");
    productImage.src = category.image;

    const producttext = document.createElement("a");
    producttext.textContent = category.title;
    producttext.href = "#";
    producttext.className =category.title;
    producttext.classList.add("category-option");

    categoryLi.appendChild(productImage);
    categoryLi.appendChild(producttext);

    return categoryLi;
}
