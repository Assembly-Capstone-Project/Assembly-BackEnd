const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
require("dotenv").config();

/**
 * Verifies authenticity of user's JWT and attaches user to request object
 * @param {object} req - The request object containing users credentials
 * @param {object} res - The response object used to send a repsonse back to the client
 * @param {object} next - The next function used to pass the req to the next middleware function
 */

// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     try {
//         const decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_KEY)
//         req.userId = decoded.userId
//         next()
//     } catch (err) {
//         switch (err.message) {
//             case 'jwt expired':
//                 const error = throw new Error('token expired')
//                 break;
//             default:
//                 errorHandler(res, err)
//         }
//     }
// }
const authenticate = async (req, res, next) => {
  // "Bearer eyhksjdbakljbjkcb387irtgw2iurfg2ifugb2fiuo24g4fi2wugfb" -> ["Bearer", "eyhksjdbakljbjkcb387irtgw2iurfg2ifugb2fiuo24g4fi2wugfb"] => "eyhksjdbakljbjkcb387irtgw2iurfg2ifugb2fiuo24g4fi2wugfb"
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).send("Token not found, please login.");

  const { username } = await jwt.verify(
    token,
    process.env.AUTH_KEY,
    (err, decoded) => {
      if (err) throw Error("Failed to authenticate token");
      return decoded;
    }
  );

  const user = await User.getUserByUsername(username);
  if (!user) return res.status(404).send("No user found.");
  req.userId = user.id;
  next();
};

module.exports = authenticate;
