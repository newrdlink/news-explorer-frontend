import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
// import Preloader from '../Preloader';
import cn from 'classnames';
import NewsCardList from '../NewsCardList/NewsCardList';
// import { cardsListSavedStatic } from '../../config/cardsList';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import RegIsOk from '../RegIsOk/RegIsOk';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { setToken, getToken, removeToken } from "../../utils/Token";
import apiAuth from "../../utils/Auth";
import api from "../../utils/Api";
import newsApi from "../../utils/NewsApi";
// import NotFound from '../NotFound/NotFound';
// import addIdCard from '../../helpers/addIdCard'
import countCardsHandler from '../../helpers/addThirdCard';
import ResultSearch from '../ResultSearch/ResultSearch';
import PreloaderNews from '../PreloaderNews/PreloaderNews';
import fun from '../../helpers/renameKeyDate';
import CloseMenuMobile from '../icons/CloseMenuMobile/CloseMenuMobile';

const App = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
  const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
  const [isOpenedRegIsOk, setIsOpenedRegIsOk] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isVisibleNews, setIsVisibleNews] = useState(false);
  const [isRegOk, setIsRegOk] = useState(true)

  const [isServerError, setIsServerError] = useState(false);
  const [keyWord, setKeyWord] = useState(" ");

  const [cardsListSearchFull, setCardsListSearchFull] = useState([])
  const [countCards, setCountCards] = useState(3);
  const [cardsListSearch, setCardsListSearch] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedCards, setSavedCards] = useState([]);
  // console.log(cardsListSearch)
  // const history = useHistory();
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const jwt = getToken()
    if (jwt) {
      api.getAppStartInfo(jwt)
        .then((res) => {
          const [user, cards] = res
          setCurrentUser({
            "name": user.name,
            "email": user.email
          })
          setSavedCards(cards)
          setLoggedIn(true)
        })
        .catch((error) => {
          // removeToken()
          // setLoggedIn(false)
          // setCurrentUser({})
          console.log(error)
        })
    }
  }, [loggedIn])
  // console.log(currentUser)
  const changePopup = () => {
    if (isOpenedSignIn) {
      setIsOpenedSignIn(false)
      setIsOpenedSignUp(true)
    }
    if (isOpenedSignUp) {
      setIsOpenedSignUp(false)
      setIsOpenedSignIn(true)
    }
    if (!isOpenedSignIn && !isOpenedSignUp) {
      setIsOpenedRegIsOk(false)
      setIsOpenedSignIn(true)
    }
  }

  const onSubmitSignIn = (data) => {
    // setIsloading(true)
    // console.log(data)
    apiAuth.signIn(data)
      .then((res) => {
        setToken(res.token)
        setLoggedIn(true)
        setIsOpenedSignIn(false)
      }
      )
      .catch((error) => console.log(error))
    setIsOpenedSignUp(false)
    setIsloading(false)
  };

  const onSubmitSignUp = (data) => {
    // console.log(data)
    apiAuth.signUp(data)
      .then((res) => {
        setIsOpenedSignUp(false)
        setIsOpenedRegIsOk(true)
      }
      )
      .catch((error) => {
        error.status ? setIsRegOk(false) :
          setIsRegOk(true)
      })
  }

  const searchReq = (req) => {
    // console.log(req)
    setKeyWord(req)
    setIsServerError(false)
    if (countCards > 3) {
      setCountCards(3)
    }
    if (isVisibleNews) {
      setIsVisibleNews(false)
    }

    setIsloading(true)
    // newsApi.testReqNews()
    newsApi.searchByRequest(req)
      .then((res) => {
        setIsloading(true)
        if (res.status) {
          // setCardsListSearchFull(addIdCard(res.articles))
          setCardsListSearchFull(res.articles)
        }
        setIsloading(false)
        setIsVisibleNews(true)
      })
      .catch((err) => {
        console.log(err)
        setIsloading(false)
        setIsServerError(true)
      })
  }

  useEffect(() => {
    setCardsListSearch(countCardsHandler(cardsListSearchFull, countCards))
  }, [cardsListSearchFull, countCards])

  const logOut = () => {
    console.log("Выйти")
    removeToken()
    setCurrentUser({})
  }

  const onClickLoadCards = () => {
    // console.log(countCards)
    setCountCards(countCards + 3)
  }

  const addCard = (idCard) => {
    // console.log(2, idCard)

    const сard = cardsListSearchFull.find((item) => item.url === idCard);
    сard.keyword = keyWord;
    const jwt = getToken()

    api.addNewCard(сard, jwt)
      .then((res) => {
        if (res) {
          const сard = cardsListSearchFull.find((item) => item.url === idCard)
          сard._id = res.id
          setSavedCards((savedCards) => ([...savedCards, сard]))
        }
      })
      .catch((error) => console.log(error))
  }
  // console.log(cardsListSearch)
  const removeCard = (idCard) => {

    const jwt = getToken()
    // console.log(100, idCard)
    api.removeCard(idCard, jwt)
      .then((res) => {
        const updateArr = savedCards.filter((item) => item._id !== res._id)
        setSavedCards(updateArr)
        //console.log(1, currentUser)
        //console.log(2, res)
      })
      .catch((error) => console.log(error))
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className={cn("app", { "app_visible": true })}>
        {/* <Preloader
          isLoading={isLoading} /> */}
        <Header onAuth={() => setIsOpenedSignIn(true)}
          logOut={logOut}
          loggedIn={loggedIn}
          currentUser={currentUser} />
        <Switch>
          <Route path="/" exact>
            <Main searchReq={searchReq} />
            {isVisibleNews || isServerError ?
              <ResultSearch
                savedCards={savedCards}
                loggedIn={loggedIn}
                addCard={addCard}
                removeCard={removeCard}
                isServerError={isServerError}
                isAreResult={cardsListSearch.length}
                cardsList={cardsListSearch}
                cardsListSearchFull={cardsListSearchFull}
                onClickLoadCards={onClickLoadCards}
                isVisibleNews={isVisibleNews} /> :
              ((isLoading && <PreloaderNews />) || null)}
            <About />
          </Route>
          <Route path="/saved-news">
            <SavedNewsHeader
              cardsList={savedCards} />
            <NewsCardList
              removeCard={removeCard}
              loggedIn={loggedIn}
              cardsListSearchFull={fun(cardsListSearchFull)}
              cardsList={savedCards} />
          </Route>
        </Switch>
        <RegIsOk
          name="Пользователь успешно зарегистрирован!"
          isOpen={isOpenedRegIsOk}
          onClose={() => setIsOpenedRegIsOk(false)}
          changePopup={changePopup} />
        <SignUp name="Регистрация"
          buttonName="Зарегистрироваться"
          isOpen={isOpenedSignUp}
          onClose={() => setIsOpenedSignUp(false)}
          onSubmit={onSubmitSignUp}
          changePopup={changePopup}
          isRegOk={isRegOk}
        />
        <SignIn name="Вход"
          buttonName="Ввойти"
          isOpen={isOpenedSignIn}
          onClose={() => setIsOpenedSignIn(false)}
          onSubmit={onSubmitSignIn}
          changePopup={changePopup}
        />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App;
