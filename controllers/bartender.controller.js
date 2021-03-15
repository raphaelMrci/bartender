let { isReady, getAvailableCocktails, getAvailableCocktailsId, getCocktail } = require("../model");
const { informUserPreparationStarted, informUserPreparationEnded } = require("../socket")
const auth = require("../data/user.json");
const cocktails = require("../data/cocktails.json");
const slots = require("../data/slots.json");
const ingredients = require("../data/ingredients.json");

exports.cocktailsList = (req, res) => {
  res.render("index", { cocktails: getAvailableCocktails() });
};

exports.makeCocktail = (req, res, next) => {
  if (isReady) {
    res.json({
      status: "success",
      message: "cocktail en cours de fabrication",
    });
    console.log(`Fabrication du cocktail ${getCocktail(req.body.id).name}`);
    informUserPreparationStarted(req.session.test.socketId);
    isReady = false;
  } else {
    res.json({ status: "error", message: "Le barman est déjà occupé" });
    console.log(`Le barman est occupé`);
  }
};

exports.authentification = (req, res) => {
  if (req.body.user == auth.user && req.body.pwd == auth.pwd){

    res.json({  status: "connected", 
                cocktails, 
                availableCocktails : getAvailableCocktailsId(), 
                ingredients, 
                slots
              });
  } else {
    res.json({status: "Unauthorized"});
  }
};