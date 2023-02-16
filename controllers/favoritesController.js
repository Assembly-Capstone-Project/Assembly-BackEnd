const FriendsModels = require("../models/FriendsModel");

async function getAllFavorites(req, res){
  const allFavorites = await FavoritesModels.getFavoritesFromDB();
  res.send(allFavorites);
};

async function getSingleFavorite(req, res){
  const favoriteId = req.params.id;
  const favorite = await FavoriteModels.getSingleFavoriteFromDB(favoriteId);
  res.send(favorite);
};

module.exports = {
  getAllFavorites,
  getSingleFavorite
};