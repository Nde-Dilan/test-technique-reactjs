import React from "react";
/*
 *
 *
 ****************     Unused   *********************/


const ItemCard = ({ article }) => {
  return (
    <div>
      <h2>Nom: {article.nom}</h2>
      <h3>
        Prix: <b class="price">{article.prix} €</b>
      </h3>
      <h4>
        Nombre en stock: <div className="stock">{article.stock}</div>
      </h4>
      <h3>Categorie: {article.categorie}</h3>
    </div>
  );
};

export default ItemCard;
