import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
// import fun from '../../helpers/renameKeyDate';

const UserPage = ({ savedCards = [], removeCard, loggedIn, cardsListSearchFull = [] }) => {
  // console.log(savedCards)
  return (
    <>
      <SavedNewsHeader
        cardsList={savedCards} />
      <NewsCardList
        removeCard={removeCard}
        loggedIn={loggedIn}
        cardsListSearchFull={cardsListSearchFull}
        cardsList={savedCards} />
    </>
  )
}

export default UserPage;
