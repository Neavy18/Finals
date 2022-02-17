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

module.exports = {
  getUsers,
  getRefuges,
  getAnimals,
  getFavorites
}