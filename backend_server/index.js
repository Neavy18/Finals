const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const { getUsers, getRefuges, getAnimals, getFavorites, registerUser, loginUser, userExists, emailPasswordMatch, matchRefugeById, addToFavorites, favoritesByUserId, getFavoriteAnimalsByAnimalId, deleteFavorites } = require('./lib/dbHelpers');
const { response } = require('express');

app.use(express.json());
app.use(cors());

// ------> GET REQUESTS <-------//

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

app.post('/users/favorites', (req, res) => {
  const user_Id = req.body.userId

  favoritesByUserId(user_Id)
  .then((response) => {
    const likedAnimalIdArr = [];
    response.map((likedAnimal) => {
      likedAnimalIdArr.push(likedAnimal.animal_id)
    })
   getFavoriteAnimalsByAnimalId(likedAnimalIdArr)
   .then((response) => {
    // console.log("this is response", response)
    res.json(response)
   })  
  });
})
//register user
app.post('/register', (req, res) => {

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const password = req.body.password

  userExists(email).then((exists) => {
    if(!exists){
      registerUser(firstName, lastName, email, password)
      .then((response) => {
        console.log("This is from the express server -->", response);
        res.status(200).json(response)
      })
    } else {
      res.status(200).json({error: "Email already in use :("})
    }
  });
});

//login user
app.post('/login', (req, res) =>  {

  const email = req.body.email
  const password = req.body.password

  emailPasswordMatch(email, password).then((match) => {
    if(match){
      loginUser(email, password)
      .then((response) => {
        console.log("Express login", response);
        res.status(200).json(response)
      })
    } else {
      res.status(200).json({error: "Password or email does not match :("})
    }
  });
});

//adds an animal to favorites dataabase when like button is clicked
app.post('/liked', (req, res) => {
  const idUser = req.body.user_id;
  const idAnimal = req.body.animal_id;

  addToFavorites(idUser, idAnimal)
  .then((response) => {
    res.status(200).json(response)
  });
});

//delete favorite from database when delete button is clicked 

app.post('/delete/favorites', (req, res) => {
  const idUser = req.body.user_id;
  const idAnimal = req.body.animal_id;

  deleteFavorites(idUser, idAnimal)
  .then((reponse) => {
    console.log("should be response!!", response)
    res.status(200).json(response)
  })
})

app.listen(PORT, () => {
  console.log(`Server is listenning on PORT ${PORT}`);
})