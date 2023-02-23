const PostsModels = require("../models/postsModel");

async function getAllPost(req, res) {
  // receive a list of games - this router is the function that handles the request and gives the response
  // create a variable that holds all the games
  const allPost = await PostsModels.getPostsFromDB();
  res.send(allPost);
}

async function getSinglePost(req, res) {
  const postId = req.params.id;
  const post = await PostsModels.getSinglePostFromDB(postId);
  res.send(post);
}

const createPost = async (req, res) => {
  try {
    const { games_id } = req.body;
    const { userId } = req;
    await PostsModels.createPostsToDB(userId, games_id);
    const allPost = await PostsModels.getPostsFromDB();
    res.status(200).send(allPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

async function deleteSinglePost(req, res) {
  const postId = req.body.id;
  const userId = req.userId;
  const post = await PostsModels.getSinglePostFromDB(postId);
  if(userId === post.users_id) {
    await PostsModels.deletePostFromDB(postId);
    const allPost = await PostsModels.getPostsFromDB();
    res.status(200).send(allPost);
  } else {
    res.status(500).send("Cannot delete post from another user")
  }
}

// in this object we can list out all functions
module.exports = {
  getAllPost,
  getSinglePost,
  createPost,
  deleteSinglePost,
};

// getGame()

// createGame()

// deleteGame()

// updateGame()

/*
R: 
Step 1: require express
Step 2: express.Router()
Step 3: destructure functions 
Step 3: router.get("/" route , "ControllerFunctionName")
Step 4: module.exports = router

C:
Step 1: 
require your model
Step 2:
create a async function to retreive the data &
use await to complete a asyncronous call to the backend
Step 3:
module.export the async funtions.

M: 
Step 1: is to require pool and connect to the db
Step 2: Create a class to hold all
of your functions that execute your queries
Step 3: modeule.export your class.
*/
