const express = require('express');
const app = express();
const PORT = 5000;

const { getUsers, getRefuges, getAnimals, getFavorites } = require('./lib/dbHelpers');


// ------> API GET REQUESTS <-------//

//api users
app.get('/api/users', (req, res) => {
  getUsers()
  .then((response) => {
    res.json(response)
    // res.status(200).json(response)
  })
})

//api refuges
app.get('/api/refuges', (req, res) => {
  getRefuges()
  .then((response) => {
    res.json(response)
    // res.status(200).json(response)
  })
})

//api animals
app.get('/api/animals', (req, res) => {
  getAnimals()
  .then((response) => {
    res.json(response)
    // res.status(200).json(response)
  })
})

//api favorites
app.get('/api/favorites', (req, res) => {
  getFavorites()
  .then((response) => {
    res.json(response)
    // res.status(200).json(response)
  })
})

app.listen(PORT, () => {
  console.log(`Server is listenning on PORT ${PORT}`);
})