const db = require("./db.js");

const getUsers = () => {
  const stringQuery = 'SELECT * FROM users'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

const getRefuges = () => {
  const stringQuery = 'SELECT * FROM animals'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

const getAnimals = () => {
  const stringQuery = 'SELECT * FROM animals'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

const getFavorites = () => {
  const stringQuery = 'SELECT * FROM favorites'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

const registerUser = (firstName, lastName, email, password) => {
  const stringQuery = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4);'
  return db 
  .query(stringQuery [firstName, lastName, email, password])
  .then((data) => {
    console.log("User added to database!")
  })
  .catch((err) => {
    console.log("Error msg in dbHelpers registerUser was triggered --->")
    err.message
  });
}

module.exports = {
  getUsers,
  getRefuges,
  getAnimals,
  getFavorites,
  registerUser
}