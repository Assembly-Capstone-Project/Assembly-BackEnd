const bcrypt = require("bcrypt");
exports.seed = async function (knex) {
  await knex("users").del();
  await knex("friends").del();
  await knex("games").del();
  await knex("posts").del();
  await knex("favorites").del();
  // await knex('friekne
  // Deletes ALL existing entries
  await knex("users").insert([
    {
      username: "Mark Giddings",
      password: bcrypt.hashSync("123", 10),
      email: "marcylabschool@gmail.com",
    }, //1
    {
      username: "Mablevi",
      password: bcrypt.hashSync("123", 10),
      email: "warcybadschool@gmail.com",
    }, //2
    {
      username: "Glitch202",
      password: bcrypt.hashSync("123", 10),
      email: "devy@gmail.com",
    }, //3
    {
      username: "Zomo",
      password: bcrypt.hashSync("123", 10),
      email: "dreyes@gmail.com",
    }, //4
    {
      username: "KoumbaMK",
      password: bcrypt.hashSync("123", 10),
      email: "marcyPrincess@gmail.com",
    }, //5
    {
      username: "Pufftalus",
      password: bcrypt.hashSync("123", 10),
      email: "MarcyOpSchool@gmail.com",
    }, //6
    {
      username: "Pkmn Trainer Ann",
      password: bcrypt.hashSync("123", 10),
      email: "PkmnTrainer@gmail.com",
    }, //7
    {
      username: "SassyManCaston",
      password: bcrypt.hashSync("123", 10),
      email: "HeyImSASSY@gmail.com",
    }, //8
    {
      username: "ExpoMarker",
      password: bcrypt.hashSync("123", 10),
      email: "ImAExpoMarker@gmail.com",
    }, //9
    {
      username: "Evian",
      password: bcrypt.hashSync("123", 10),
      email: "ImJustWater@gmail.com",
    }, //10
  ]);

  await knex("favorites").insert([
    { users_id: 1, games_id: 1 },
    { users_id: 7, games_id: 2 },
    { users_id: 3, games_id: 4 },
    { users_id: 5, games_id: 4 },
    { users_id: 1, games_id: 1 },
    { users_id: 3, games_id: 5 },
    { users_id: 2, games_id: 3 },
    { users_id: 6, games_id: 3 },
    { users_id: 8, games_id: 5 },
    { users_id: 9, games_id: 5 },
  ]);

  await knex("friends").insert([
    { sender_id: 1, receiver_id: 8 },
    { sender_id: 1, receiver_id: 2 },
    { sender_id: 1, receiver_id: 3 },
    { sender_id: 2, receiver_id: 4 },
    { sender_id: 2, receiver_id: 3 },
    { sender_id: 4, receiver_id: 3 },
    { sender_id: 5, receiver_id: 4 },
    { sender_id: 6, receiver_id: 3 },
    { sender_id: 7, receiver_id: 3 },
    { sender_id: 8, receiver_id: 4 },
  ]);

  await knex("games").insert([
    {
      name: "Elden Ring",
      platform: "Ps5",
      rating: "M",
      url: [
        "https://w0.peakpx.com/wallpaper/192/766/HD-wallpaper-new-elden-ring-malenia.jpg",
      ],
    },
    {
      name: "Pokemon",
      platform: "Nintendo",
      rating: "E",
      url: [
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
      ],
    },
    {
      name: "World of Tanks",
      platform: "PC",
      rating: "T",
      url: [
        "https://worldoftanks.asia/static/5.117.1_a28195/wotp_static/img/download_game/frontend/scss/img/sharing.jpg",
      ],
    },
    {
      name: "Hogworts",
      platform: "Ps5",
      rating: "T",
      url: [
        "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e",
      ],
    },
    {
      name: "Super Smash Bros Melee.",
      platform: "Nintendo",
      rating: "M",
      url: [
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
      ],
    },
    {
      name: "Call of Duty 4",
      platform: "Xbox",
      rating: "M",
      url: [
        "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg",
      ],
    },
    {
      name: "Wii Sports",
      platform: "Nintendo",
      rating: "E",
      url: [
        "https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg",
      ],
    },
    {
      name: "MineCraft",
      platform: "PC",
      rating: "E",
      url: [
        "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
      ],
    },
    {
      name: "SpiderMan",
      platform: "Ps5",
      rating: "T",
      url: [
        "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png",
      ],
    },
    {
      name: "Legend of Zelda",
      platform: "Nintendo",
      rating: "M",
      url: [
        "https://media.gamestop.com/i/gamestop/10141904/The-Legend-of-Zelda-Breath-of-the-Wild---Nintendo-Switch?$pdp$",
      ],
    },
  ]);

  await knex("posts").insert([
    { users_id: 1 , games_id: 1},
    { users_id: 2 , games_id: 2},
    { users_id: 3 , games_id: 3},
    { users_id: 4 , games_id: 4},
    { users_id: 5 , games_id: 6},
    { users_id: 6 , games_id: 5},
    { users_id: 7 , games_id: 7},
    { users_id: 8 , games_id: 8},
    { users_id: 9 , games_id: 9},
    { users_id: 10 , games_id: 10},
  ]);
};
