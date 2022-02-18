const { DataRowMessage } = require("pg-protocol/dist/messages");
const db = require("./db.js");

// this function checks that a user email does not already exist in the database
const userExists = (email) => {
  const stringQuery = 'SELECT * FROM users WHERE email = $1;'
  return db
  .query(stringQuery, [email])
  .then((data) => {
    if(!data.rows[0]){
      return false
    } else {
      return true
    }
  });
};

// this function checks that a user's email and password match the ones in the database
const emailPasswordMatch = (email, password) => {
  const stringQuery ='SELECT * FROM users WHERE email = $1 AND password = $2;'
  return db
  .query(stringQuery, [email, password])
  .then((data) => {
    if(!data.rows[0]){
      return false
    } else {
      return true
    }
  });
};

//get Users query
const getUsers = () => {
  const stringQuery = 'SELECT * FROM users'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows
  })
  .catch((err) => err.message);
};

//get Refuges query
const getRefuges = () => {
  const stringQuery = 'SELECT * FROM refuges'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows
  })
  .catch((err) => err.message);
};

//get Animals query
const getAnimals = () => {
  const stringQuery = 'SELECT * FROM animals'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows
  })
  .catch((err) => err.message);
};

//get Favorites query
const getFavorites = () => {
  const stringQuery = 'SELECT * FROM favorites'
  return db
  .query(stringQuery)
  .then((data) => {
    return data.rows
  })
  .catch((err) => err.message);
};

//register User query ---> add error message if user already exist!

const registerUser = (firstName, lastName, email, password) => {
  const stringQuery = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;'
  return db 
  .query(stringQuery, [firstName, lastName, email, password])
  .then((data) => {
    console.log("this is data -->", data.rows)
    return data.rows
  })
  .catch((err) => {
    console.log("Error msg in dbHelpers registerUser was triggered --->")
    err.message
  });   
};

//login User query ---> add error message if no user is found!
const loginUser = (email, password) => {
  console.log("this is the email pasword query spot -->", email, password)
  const stringQuery = 'SELECT * FROM users WHERE email = $1 AND password = $2;'
  return db 
  .query(stringQuery, [email, password])
  .then((data) => {
    if(!data.rows[0]){
      console.log("User does not exist")
    } else {
      console.log("User logged in!", data.rows)
    }
  })
  .catch((err) => {
    console.log("Error msg in dbHelpers loginUser was triggered --->")
    err.message
  });
};


module.exports = {
  getUsers,
  getRefuges,
  getAnimals,
  getFavorites,
  registerUser,
  loginUser,
  userExists,
  emailPasswordMatch
}