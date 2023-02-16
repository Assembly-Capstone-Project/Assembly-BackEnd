const bcrypt = require('bcrypt')
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('friends').del()
  await knex('games').del()
  await knex('posts').del()
  // await knex('friekne
  // Deletes ALL existing entries
  await knex('users').insert([
    {username: 'Mark Giddings', password: bcrypt.hashSync('123', 10) , email: "marcylabschool@gmail.com"},
    {username: 'Mablevi', password: bcrypt.hashSync('123', 10) , email: "warcybadschool@gmail.com"},
    {username: 'Glitch202', password: bcrypt.hashSync('123', 10) , email: "devy@gmail.com"},
    {username: 'Zomo', password: bcrypt.hashSync('123', 10) , email: "dreyes@gmail.com"},
  ]);

  await knex('friends').insert([
    {sender_id: 2, receiver_id: 4},
    {sender_id: 2, receiver_id: 3},
    {sender_id: 4, receiver_id: 3},
  ]);

  await knex('games').insert([
    {name: 'Elden Ring', platform: "Ps5", rating: "M" },
    {name: 'Pokemon', platform: "Nintendo", rating: "E" },
    {name: 'World of Tanks', platform: "PC", rating: "T" },
    {name: 'Hogworts', platform: "Ps5", rating: "T" },
    {name: 'Super Smash Bros Melee.', platform: "Nintendo", rating: "M" },
  ]);

  await knex('posts').insert([
    {post_image: 'url-fdpfnwepfnpdnapsa', user_id: 1},
    {post_image: 'url-2dnapsa', user_id: 2},
    {post_image: 'url-3dpdnapsa', user_id: 3},
  ]);
};


// {
//   "username": "",
//   "email": "",
//   "password": "123456789"
// }