const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Song } = require("../models/Song.js");
const { Artist } = require("../models/Artist.js");
const { generateRandom } = require("../utils.js");

const songReslationsSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión!");

    // Recuperamos usuarios, coches y marcas
    const songs = await Song.find();
    const artists = await Artist.find();

    // Comprobar que existen canciones
    if (!songs.length) {
      console.error("No hay coches para relacionar en la base de datos");
      return;
    }

    if (!artists.length) {
      console.error("No hay usuarios para relacionar en la base de datos");
      return;
    }

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const randomArtist = artists[generateRandom(0, artists.length - 1)];
      song.artist = randomArtist.id;
      await song.save();
    }

    console.log(
      "La relación entre canciones y artistas se ha creado correctamente."
    );
  } catch (error) {
  } finally {
    mongoose.disconnect();
  }
};

songReslationsSeed();
