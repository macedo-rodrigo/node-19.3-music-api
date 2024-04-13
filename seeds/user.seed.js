const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { User } = require("../models/User.js");

const userList = [
  {
    firstName: "Fran",
    lastName: "Linde",
    email: "franlinde@gmail.com",
  },
  {
    firstName: "Edu",
    lastName: "Cuadrado",
    email: "edu@gmail.com",
  },
  {
    firstName: "Gon",
    lastName: "Fernández",
    email: "gonfer@gmail.com",
  },
  {
    firstName: "María",
    lastName: "Martínez",
    email: "maria.martinez@example.com",
  },
  {
    firstName: "Juan",
    lastName: "Gómez",
    email: "juangomez@example.com",
  },
  {
    firstName: "Laura",
    lastName: "López",
    email: "laura.lopez@example.com",
  },
  {
    firstName: "Carlos",
    lastName: "Sánchez",
    email: "carlos.sanchez@example.com",
  },
  {
    firstName: "Ana",
    lastName: "Rodríguez",
    email: "ana.rodriguez@example.com",
  },
  {
    firstName: "Pablo",
    lastName: "Díaz",
    email: "pablo.diaz@example.com",
  },
  {
    firstName: "Sara",
    lastName: "Hernández",
    email: "sara.hernandez@example.com",
  },
];

const userSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await User.collection.drop();
    console.log("Usuarios eliminados");

    // Añadimos usuarios
    const documents = userList.map((user) => new User(user));
    await User.insertMany(documents);
    console.log("Usuarios creados correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

userSeed();
