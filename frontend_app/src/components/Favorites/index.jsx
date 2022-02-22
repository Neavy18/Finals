import React, { useState, useEffect } from 'react';
import FavoriteAnimal from '../FavoriteAnimal';
import FavoritePopUp from '../FavoritePopUp'
import "./Favorites.css"
import useInfoData from '../../Api';
import LikeMsg from '../LikeMsg';
import RequestInfoMsg from '../RequestInfoMsg' 

//the my favorites with a similar display as the homepage

const Favorites = ({ name }) => {

  const {
    getFavorites
  } = useInfoData();
  
  let currentUser = localStorage.getItem('currentUser')
  currentUser = JSON.parse(currentUser)

  const [selectedFavoritePop, setSelectedFavoritePop] = useState(false);
  const [favoritesData, setFavoritesData] = useState(null);

  
  const [showRequestMessage, setShowRequestMessage] = useState(false);
  const [requestMessage, setRequestMessage] = useState(null);
  
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
      <div className='AnimalsTilesContainer'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3">
          {favoritesData.map(favorite => (
            <FavoriteAnimal 
              favorite={favorite} 
              setSelectedFavoritePop={setSelectedFavoritePop}
            />
          ))}
        </div>
      </div>
  
      {selectedFavoritePop && (
        <FavoritePopUp 
          selectedFavoritePop={selectedFavoritePop} setSelectedFavoritePop={setSelectedFavoritePop} 
          setRequestMessage={setRequestMessage}
          setShowRequestMessage={setShowRequestMessage}
        />
      )}

      {showRequestMessage && (
        <RequestInfoMsg 
          requestMessage={requestMessage}
          setShowRequestMessage={setShowRequestMessage}
        />
      )}
    </div>
  );
}

export default Favorites;
