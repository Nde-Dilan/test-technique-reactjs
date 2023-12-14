import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import "./App.css";
import ResultCard from "./components/ResultCard";
import articles from "./data";
import { createAndDisplayDiv, filterArticlesByPriceAndStock } from "./utils";

function App() {
  
  const formatAndDisplay = (prix, stock) => {
    let resultEl = document.querySelector("#results");

    document.querySelector(
      ".title"
    ).innerHTML = `Article(s) trouvé(s) pour un prix < à ${prix}€ ou un stock > à ${stock} unités`;

    const filterArticles = filterArticlesByPriceAndStock(articles, prix, stock);
    console.log(filterArticles, prix, stock);
    resultEl.innerHTML = "";
    filterArticles.length
      ? createAndDisplayDiv(filterArticles, resultEl)
      : (resultEl.innerHTML =
          "<h2>Aucun article(s) trouvés, veillez essayer d'autres parametres. </h2>");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prix = document.querySelector("#price").value
      ? document.querySelector("#price").value
      : 100;
    let stock = document.querySelector("#stock").value
      ? document.querySelector("#stock").value
      : 20;

    [prix, stock] = [parseInt(prix), parseInt(stock)];
    // console.log(prix,stock);

    formatAndDisplay(prix, stock);
  };

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <CustomInput
          forAtt="price"
          name="Prix:"
          type="number"
          id="price"
          placeholder="Inserer votre prix (100 par défaut)"
        />

        <CustomInput
          forAtt="stock"
          name="Stock:"
          type="number"
          id="stock"
          placeholder="Inserer le stock requis (20 par défaut)"
        />
        <CustomButton text="Filtrer" />
      </form>

      <ResultCard />
    </>
  );
}

export default App;
