const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const { getUsers, getRefuges, getAnimals, getFavorites, registerUser, loginUser } = require('./lib/dbHelpers');

app.use(express.json());
app.use(cors());


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

// ------> POST REQUESTS <-------//

//register user
app.post('/register', (req, res) => {

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const password = req.body.password

  registerUser(firstName, lastName, email, password)
  .then((response) => {
    console.log("User registered succesfully");
  })
})

//login user
app.post('/login', (req, res) =>  {

  const email = req.body.email
  const password = req.body.password

  console.log("email and password!! -->", email, password)
  loginUser(email, password)
  .then((response) => {
    console.log("User logged in succesfully");
  })
});

app.listen(PORT, () => {
  console.log(`Server is listenning on PORT ${PORT}`);
})