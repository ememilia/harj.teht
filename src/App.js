import React from "react";
import axios from "axios";
const coctail = {
  drinks: [
    {
      idDrink: "14622",
      strDrink: "Arctic Fish",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Punch / Party Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Beer pilsner",
      strInstructions:
        "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
      strInstructionsES:
        "Llene el vaso con hielo y gomitas, agregue vodka, refresco de uva y jugo de naranja. \u00a1\u00a1\u00a1\u00a1\u00a1NO REVUELVAS!!!!! Servir refrigerado.",
      strInstructionsDE:
        "Das Glas mit Eis und Fisch f\u00fcllen, Wodka, Traubensaft und Orangensaft hinzuf\u00fcgen. NICHT UMR\u00dcHREN. Gut gek\u00fchlt servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Riempi il bicchiere con ghiaccio e pesce, aggiungi vodka, soda d'uva e succo d'arancia. Non mescolare. Servire ben freddo.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
      strIngredient1: "Vodka",
      strIngredient2: "Grape soda",
      strIngredient3: "Orange juice",
      strIngredient4: "Ice",
      strIngredient5: "Candy",
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: "1/3 part ",
      strMeasure2: "1/3 part ",
      strMeasure3: "1/3 part ",
      strMeasure4: "lots ",
      strMeasure5: "1 dash ",
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2016-08-31 19:39:41",
    },
  ],
};
const searchUrl = (haku) =>
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${haku}`;
function App() {
  let [drink, setDrink] = React.useState(coctail.drinks[0]);
  /* strDrink, strInstructions */

  return (
    <>
      <h1>Coctail of the day</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let haku = event.target.haku.value;
          let hakuUrl = searchUrl(haku);
          axios.get(hakuUrl).then((response) => {
            if (response.data.drinks) {
              setDrink(response.data.drinks[0]);
            } else {
              setDrink(null);
            }
          });
        }}
      >
        <input name="haku"></input>
        <button>Search</button>
      </form>
      {drink ? (
        <>
          <h2>{drink.strDrink}</h2>
          <h2>Glass</h2>
          <p>{drink.strGlass}</p>
          <h2>Instructions</h2>
          <p>{drink.strInstructions}</p>
        </>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}

export default App;
