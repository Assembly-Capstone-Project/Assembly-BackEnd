const FavoriteModel = require("../models/favoriteModel");

async function getAllFavorites(req, res) {
  const allFavorites = await FavoriteModel.getFavoritesFromDB();
  res.send(allFavorites);
}

async function getSingleFavorite(req, res) {
  const favoriteId = req.params.id;
  const favorite = await FavoriteModel.getSingleFavoriteFromDB(favoriteId);
  res.send(favorite);
}

module.exports = {
  getAllFavorites,
  getSingleFavorite,
};
