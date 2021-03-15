const cocktails = require("../data/cocktails.json");
const ingredients = require("../data/ingredients.json");
const slots = require("../data/slots.json");

const fs = require("fs");

exports.isReady = true;

exports.getAvailableCocktails = () => {
  return cocktails.filter((cocktail) =>
    cocktail.ingredients.every((ingredient) =>
      slots.some((slot) => slot.ingredient_id === ingredient.id)
    )
  );
};

exports.getAvailableCocktailsId = () => {
  
  let avCocktailsIds = [];

  this.getAvailableCocktails().forEach((item) => {
    avCocktailsIds.push(item.id);
  });

  return avCocktailsIds;
};

exports.getCocktail = (cocktailId) => {
  return cocktails.find((cocktail) => cocktail.id === cocktailId);
};

exports.editSlot = (slotId, ingredientId) => {
  
  let allSlots = slots;
  allSlots[slotId].ingredient_id = ingredientId;

  let data = JSON.stringify(allSlots);

  fs.writeFileSync("data/slots.json", data);

  return true;
};

exports.newIngredient = (name, image, color) => {

  let ids = [];
  ingredients.forEach((item) => { ids.push(item.id) });

  let i = 1;
  while (ids.some((id) => id == i )) { i++ }

  let newIngredient = { id: i, name, image, color };
  let allIngredients = ingredients;
  allIngredients.push(newIngredient);
  
  let data = JSON.stringify(allIngredients);

  fs.writeFileSync("data/ingredients.json", data);

  return true;
}

exports.deleteIngredient = (id) => {

  let index = ingredients.findIndex((ingredient) => ingredient.id == id);

  let allIngredients = ingredients;

  allIngredients.splice(index, 1);

  let data = JSON.stringify(allIngredients);
  fs.writeFileSync("data/ingredients.json", data);

  return true;
}

exports.newCocktail = (name, description, image, color, ingredients) => {

  //TODO: Remake with findIndex
  let ids = [];
  cocktails.forEach((cocktail) => { ids.push(cocktail.id) });

  let i = 1;

  while (ids.some((id) => id == i )) { i++ }

  let newCocktail = {id: i, name, description, image, color, ingredients};
  let allCocktails = cocktails;
  allCocktails.push(newCocktail);

  let data = JSON.stringify(allCocktails);
  fs.writeFileSync("data/cocktails.json", data);

  return true;
}

exports.deleteCocktail = (id) => {
  let index = cocktails.findIndex((cocktail) => cocktail.id == id);

  let allCocktails = cocktails;

  allCocktails.splice(index, 1);

  let data = JSON.stringify(allCocktails);
  fs.writeFileSync("data/cocktails.json", data);

  return true;
}