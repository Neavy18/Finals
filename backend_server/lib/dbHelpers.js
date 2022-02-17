const db = require("./db.js");

//get Users query
const getUsers = () => {
  const stringQuery = 'SELECT * FROM users'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

//get Refuges query
const getRefuges = () => {
  const stringQuery = 'SELECT * FROM animals'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

//get Animals query
const getAnimals = () => {
  const stringQuery = 'SELECT * FROM animals'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

//get Favorites query
const getFavorites = () => {
  const stringQuery = 'SELECT * FROM favorites'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => err.message);
};

//register User query ---> add error message if user already exist!
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

//login User query ---> add error message if no user is found!
const loginUser = (email, password) => {
  const stringQuery = 'SELECT * FROM users WHERE email = $1 AND password = $2;'
  return db 
  .query(stringQuery [email, password])
  .then((data) => {
    console.log("User logged in!")
  })
  .catch((err) => {
    console.log("Error msg in dbHelpers loginUser was triggered --->")
    err.message
  });
}

module.exports = {
  getUsers,
  getRefuges,
  getAnimals,
  getFavorites,
  registerUser,
  loginUser
}