const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Song } = require("../models/Song.js");

const songList = [
  {
    title: "Motomami",
    duration: "reggaeton",
    year: 2017,
  },
  {
    title: "Shape of You",
    duration: "3:53",
    year: 2017,
  },
  {
    title: "Hips Don't Lie",
    duration: "3:38",
    year: 2005,
  },
  {
    title: "Bohemian Rhapsody",
    duration: "5:55",
    year: 1975,
  },
  {
    title: "Someone Like You",
    duration: "4:45",
    year: 2011,
  },
  {
    title: "In My Feelings",
    duration: "3:38",
    year: 2018,
  },
  {
    title: "Hello",
    duration: "4:55",
    year: 2015,
  },
  {
    title: "Despacito",
    duration: "3:49",
    year: 2017,
  },
  {
    title: "Don't Stop Believin'",
    duration: "4:10",
    year: 1981,
  },
  {
    title: "Uptown Funk",
    duration: "4:30",
    year: 2014,
  },
];

const songSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Song.collection.drop();
    console.log("Canciones eliminadas");

    // Añadimos usuarios
    const documents = songList.map((song) => new Song(song));
    await Song.insertMany(documents);
    console.log("Canciones creadas correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

songSeed();
