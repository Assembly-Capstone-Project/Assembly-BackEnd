const bcrypt = require('bcrypt')
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('friends').del()
  await knex('games').del()
  await knex('posts').del()
  await knex('favorites').del()
  // await knex('friekne
  // Deletes ALL existing entries
  await knex('users').insert([
    {username: 'Mark Giddings', password: bcrypt.hashSync('123', 10) , email: "marcylabschool@gmail.com"},//1
    {username: 'Mablevi', password: bcrypt.hashSync('123', 10) , email: "warcybadschool@gmail.com"},//2
    {username: 'Glitch202', password: bcrypt.hashSync('123', 10) , email: "devy@gmail.com"},//3
    {username: 'Zomo', password: bcrypt.hashSync('123', 10) , email: "dreyes@gmail.com"},//4
    {username: 'KoumbaMK', password: bcrypt.hashSync('123', 10) , email: "marcyPrincess@gmail.com"},//5
    {username: 'Pufftalus', password: bcrypt.hashSync('123', 10) , email: "MarcyOpSchool@gmail.com"},//6
    {username: 'Pkmn Trainer Ann', password: bcrypt.hashSync('123', 10) , email: "PkmnTrainer@gmail.com"},//7
    {username: 'SassyManCaston', password: bcrypt.hashSync('123', 10) , email: "HeyImSASSY@gmail.com"},//8
    {username: 'ExpoMarker', password: bcrypt.hashSync('123', 10) , email: "ImAExpoMarker@gmail.com"},//9
    {username: 'Evian', password: bcrypt.hashSync('123', 10) , email: "ImJustWater@gmail.com"},//10
  ]);

  await knex('favorites').insert([
    {users_id: 1, games_id: 1},
    {users_id: 7, games_id: 2},
    {users_id: 3, games_id: 4},
    {users_id: 5, games_id: 4},
    {users_id: 1, games_id: 1},
    {users_id: 3, games_id: 5},
    {users_id: 2, games_id: 3},
    {users_id: 6, games_id: 3},
    {users_id: 8, games_id: 5},
    {users_id: 9, games_id: 5},
  ]);

  await knex('friends').insert([
    {sender_id: 1, receiver_id: 8},
    {sender_id: 1, receiver_id: 2},
    {sender_id: 1, receiver_id: 3},
    {sender_id: 2, receiver_id: 4},
    {sender_id: 2, receiver_id: 3},
    {sender_id: 4, receiver_id: 3},
    {sender_id: 5, receiver_id: 4},
    {sender_id: 6, receiver_id: 3},
    {sender_id: 7, receiver_id: 3},
    {sender_id: 8, receiver_id: 4}
  ]);


  await knex('games').insert([
    {name: 'Elden Ring', platform: "Ps5", rating: "M" },
    {name: 'Pokemon', platform: "Nintendo", rating: "E" },
    {name: 'World of Tanks', platform: "PC", rating: "T" },
    {name: 'Hogworts', platform: "Ps5", rating: "T" },
    {name: 'Super Smash Bros Melee.', platform: "Nintendo", rating: "M" },
    {name: 'Call of Duty 4', platform: "Xbox", rating: "M" },
    {name: 'Wii Sports', platform: "Nintendo", rating: "E" },
    {name: 'MineCraft', platform: "PC", rating: "E" },
    {name: 'SpiderMan', platform: "Ps5", rating: "T" },
    {name: 'Legend of Zelda', platform: "Nintendo", rating: "M" },
  ]);

  await knex('posts').insert([
    {post_image: 'url-fdpfnwe', users_id: 1},
    {post_image: 'url-2dnapsa', users_id: 2},
    {post_image: 'url-3dpdnapsa', users_id: 3},
    {post_image: 'url-fdpfnwepf', users_id: 4},
    {post_image: 'url-2dnapsa', users_id: 5},
    {post_image: 'url-3dpdnapsa', users_id: 6},
    {post_image: 'url-fdp2133', users_id: 7},
    {post_image: 'url-2dn4342', users_id: 8},
    {post_image: 'url-3dp43423', users_id: 9},
    {post_image: 'url-87686psa', users_id: 10},
  ]);
};

