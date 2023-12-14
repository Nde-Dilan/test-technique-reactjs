export const createAndDisplayDiv = (articles, resultEl) => {
  articles.forEach((article) => {
    let divEl = document.createElement("div");
    divEl.setAttribute("class", "card");
    divEl.innerHTML = `
    <h2>Nom: ${article.nom}</h2>
              <h3>Prix: <b class="price">${article.prix} €</b></h3>
              <h4>Nombre en stock: <div class="stock">${article.stock}</div></h4>
              <h3>Categorie: ${article.categorie}</h3>
    `;

    resultEl.appendChild(divEl);
  });
};

export const filterArticlesByPriceAndStock = (articles, prix, stock) => {
  return articles.filter(
    (article) => article.prix < prix || article.stock > stock
  );
};
