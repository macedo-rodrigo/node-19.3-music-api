const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Artist } = require("../models/Artist.js");

const artistList = [
  {
    name: "Rosalía",
    genre: "Samba",
    since: 2017,
    country: "Spain",
  },
  {
    name: "Beyoncé",
    genre: "Pop",
    since: 1997,
    country: "United States",
  },
  {
    name: "Ed Sheeran",
    genre: "Pop",
    since: 2005,
    country: "United Kingdom",
  },
  {
    name: "Shakira",
    genre: "Latin Pop",
    since: 1990,
    country: "Colombia",
  },
  {
    name: "Drake",
    genre: "Hip Hop",
    since: 2001,
    country: "Canada",
  },
  {
    name: "Adele",
    genre: "Soul",
    since: 2006,
    country: "United Kingdom",
  },
  {
    name: "Kendrick Lamar",
    genre: "Hip Hop",
    since: 2003,
    country: "United States",
  },
  {
    name: "Taylor Swift",
    genre: "Pop",
    since: 2004,
    country: "United States",
  },
  {
    name: "Justin Bieber",
    genre: "Pop",
    since: 2007,
    country: "Canada",
  },
  {
    name: "Coldplay",
    genre: "Alternative Rock",
    since: 1996,
    country: "United Kingdom",
  },
];

const artistSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Artist.collection.drop();
    console.log("Artistas eliminados");

    // Añadimos usuarios
    const documents = artistList.map((artist) => new Artist(artist));
    await Artist.insertMany(documents);
    console.log("Artistas creados correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

artistSeed();
