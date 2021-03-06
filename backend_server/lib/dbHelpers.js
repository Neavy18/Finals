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

// this function checks that a user email and password match the ones in the database
const emailPasswordMatch = (email, password) => {
  const stringQuery ='SELECT * FROM users WHERE email = $1 AND password =$2;'
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
  const stringQuery = 'SELECT * FROM animals;'
  return db
  .query(stringQuery)
  .then((data) => {
    console.log("this is data rows", data.rows)
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
    console.log("this is data from Database(pg) -->", data.rows[0])
    return data.rows[0]
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
      return data.rows[0]
    }
  })
  .catch((err) => {
    console.log("Error msg in dbHelpers loginUser was triggered --->")
    err.message
  });
};

const matchRefugeById = (id) => {
  const stringQuery = 'SELECT * FROM refuges WHERE id = $1;'
  return db
  .query(stringQuery, [id])
  .then((data) => {
    if(!data.rows[0]){
      console.log("Couldn't find refuge")
    } else {
      return data.rows[0]
    }
  });
};

const addToFavorites = (userId, animalId) => {
  const stringQuery = 'INSERT INTO favorites (user_id, animal_id) VALUES ($1, $2) RETURNING *;'
  return db
  .query(stringQuery, [userId, animalId])
  .then((data) => {
    return data.rows[0]
  });
};

const favoritesByUserId = (userId) => {
  const stringQuery = 'SELECT * FROM favorites WHERE user_id = $1;'
  return db
  .query(stringQuery, [userId])
  .then((data) => {
    return data.rows
  });
};


const getFavoriteAnimalsByAnimalId = (animalArray) => {

  const startQuery = 'SELECT * FROM animals WHERE id = '
  let newQuery = []
  newQuery.push(startQuery)

  animalArray.map((animalId) => {
    newQuery.push(animalId)
    newQuery.push(' OR id = ')
  })

  newQuery.pop();
  newQuery.push(';');
  const stringQuery = newQuery.join('')

  return db.query(stringQuery)
  .then((data) => {
    return data.rows
  });
};

const deleteFavorites = (userId, animalId) => {
  const stringQuery = 'DELETE FROM favorites WHERE user_id = $1 AND animal_id = $2;'
  return db
  .query(stringQuery, [userId, animalId])
  .then(() => {
    const bye = {message: "SUCCESFULLY DELETED"}
    return bye
  })
}

module.exports = {
  getUsers,
  getRefuges,
  getAnimals,
  getFavorites,
  registerUser,
  loginUser,
  userExists,
  emailPasswordMatch,
  matchRefugeById,
  addToFavorites,
  favoritesByUserId,
  getFavoriteAnimalsByAnimalId,
  deleteFavorites
}