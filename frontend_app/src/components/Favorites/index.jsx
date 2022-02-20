import React, { useState, useEffect } from 'react';
import FavoriteAnimal from '../FavoriteAnimal';
import FavoritePopUp from '../FavoritePopUp'
import "./Favorites.css"
import useInfoData from '../../Api';

//the my favorites with a similar display as the homepage

const Favorites = ({ name }) => {

  const {
    getFavorites
  } = useInfoData();
  
  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const [selectedFavoritePop, setSelectedFavoritePop] = useState(false);
  const [favoritesData, setFavoritesData] = useState(null);
  
  useEffect(() => {
   (getFavorites(currentUser.id).then((favorites) => {
     setFavoritesData(favorites)
   }))
  }, [setFavoritesData])

  if(favoritesData === null){
    return null
  }

  return (
    <div>
      <h1 className='Slogan'>My favorites</h1>
     <div className='AnimalTiles'>
        {favoritesData.map(favorite => (
          <FavoriteAnimal favorite={favorite} setSelectedFavoritePop={setSelectedFavoritePop}/>
        ))}
      </div>
      {selectedFavoritePop && (
        <FavoritePopUp selectedFavoritePop={selectedFavoritePop} setSelectedFavoritePop={setSelectedFavoritePop} />
      )}
    </div>
  );
}

export default Favorites;
