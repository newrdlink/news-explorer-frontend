import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import cn from 'classnames';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import RegIsOk from '../RegIsOk/RegIsOk';
import { Switch, Route, useHistory } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import {
  setToken,
  getToken,
  removeToken,
  setUserData,
  getUserData,
  // removeUserData,
  setKeyword,
  // getKeyword
} from "../../utils/Token";
import {
  setCardsToLocSt,
  getCardsFromLocSt,
  // removeCardsOfLocSt,
  setCountToLocSt,
  getCountFromLocSt,
  // removeCountOfLocSt
} from '../../utils/setCardsToLocSt'
import apiAuth from "../../utils/Auth";
import api from "../../utils/Api";
// import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import countCardsHandler from '../../helpers/addThirdCard';
import ResultSearch from '../ResultSearch/ResultSearch';
import PreloaderNews from '../PreloaderNews/PreloaderNews';
import fun from '../../helpers/renameKeyDate';
import UserPage from '../UserPage/UserPage';
import ProtectedRoute from '../ProtectedRoute';
import { ADD_CARDS } from '../../constants'
import addIdCard from '../../helpers/addIdCard'

const App = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
  const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
  const [isOpenedRegIsOk, setIsOpenedRegIsOk] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isVisibleNews, setIsVisibleNews] = useState(false);
  const [isRegOk, setIsRegOk] = useState("")
  const [isSignInOk, setIsSignInOk] = useState("")
  const [isServerError, setIsServerError] = useState(false);
  const [cardsListSearchFull, setCardsListSearchFull] = useState([])
  const [countCards, setCountCards] = useState(3);
  const [cardsListSearch, setCardsListSearch] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedCards, setSavedCards] = useState([]);

  const [isRequesting, setIsRequesting] = useState(false)

  // const location = useLocation();
  // const { pathname: currentPath } = location

  const history = useHistory()
  useEffect(() => {
    const { location: { state } } = history
    if (state && !loggedIn) {
      setIsOpenedSignIn(true)
      history.replace({ ...history.location, state: false });
    }
  }, [loggedIn, history])

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const userData = JSON.parse(getUserData())
    const jwt = getToken()

    if (userData) {
      return
    }

    if (jwt) {
      api.getAppStartInfo(jwt)
        .then((res) => {
          const [user, cards] = res
          setUserData({ user, "cards": cards })
          setCurrentUser({
            "name": user.name,
            "email": user.email
          })
          setSavedCards(cards)
          setLoggedIn(true)
        })
        .catch((error) => {
          removeToken()
          setLoggedIn(false)
          setCurrentUser({})
          console.log(error)
        })
    }
  }, [loggedIn])

  useEffect(() => {
    const userData = JSON.parse(getUserData())

    if (userData && loggedIn) {
      const { user } = userData
      setUserData({ user, "cards": savedCards })
      setLoggedIn(true)
      setCurrentUser(user)
    }
  }, [loggedIn, savedCards])

  useEffect(() => {
    const userData = JSON.parse(getUserData())

    if (userData && !loggedIn) {
      const { user, cards } = userData
      setUserData({ user, "cards": cards })
      setSavedCards(cards)
      setLoggedIn(true)
    }
  }, [loggedIn])

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
    setIsRequesting(true)

    apiAuth.signIn(data)
      .then((res) => {
        setToken(res.token)
        setLoggedIn(true)
        setIsOpenedSignIn(false)
        setIsRequesting(false)
      }
      )
      .catch((error) => {
        console.log(error)
        setIsSignInOk(error)
        setIsRequesting(false)
      })
    setIsOpenedSignUp(false)
    setIsloading(false)
  };

  const onSubmitSignUp = (data) => {
    setIsRequesting(true)

    apiAuth.signUp(data)
      .then((res) => {
        setIsOpenedSignUp(false)
        setIsOpenedRegIsOk(true)
        setIsRequesting(false)
      }
      )
      .catch((error) => {
        console.log(error)
        setIsRegOk(error)
        setIsRequesting(false)
      })
  }

  const searchReq = (req) => {
    setIsRequesting(true)
    setKeyword(req)
    setIsServerError(false)
    if (countCards > ADD_CARDS) {
      setCountCards(ADD_CARDS)
    }
    if (isVisibleNews) {
      setIsVisibleNews(false)
    }
    setIsloading(true)
    // newsApi.searchByRequest(req)
    mainApi.searchByRequest(req)
      .then((res) => {
        setIsloading(true)
        if (res.status) {
          setCountCards(ADD_CARDS)
          setCountToLocSt(ADD_CARDS)
          setCardsListSearchFull(res.articles)
          setCardsToLocSt(addIdCard(res.articles, req))
        }
        setIsloading(false)
        setIsVisibleNews(true)
        setIsRequesting(false)
      })
      .catch((err) => {
        console.log(err)
        setIsloading(false)
        setIsServerError(true)
        setIsRequesting(false)
      })
  }

  const logOut = () => {
    setLoggedIn(false)
    setCurrentUser({})
    localStorage.clear()
    setIsVisibleNews(false)
    setSavedCards([])
    setCardsListSearch([])
    setCardsListSearchFull([])
  }

  const onClickLoadCards = () => {
    const newCount = Number(countCards) + Number(ADD_CARDS)
    setCountCards(newCount)
    setCountToLocSt(newCount)
  }

  const addCard = (idCard) => {
    // console.log("добавление", idCard)
    const сard = JSON.parse(getCardsFromLocSt()).find((item) => item.url === idCard);
    const jwt = getToken()
    // console.log(idCard)

    api.addNewCard(сard, jwt)
      .then((res) => {
        if (res) {
          const сard = JSON.parse(getCardsFromLocSt()).find((item) => item.url === idCard)
          сard._id = res.id
          setSavedCards((savedCards) => ([...savedCards, сard]))
        }
      })
      .catch((error) => console.log(error))
  }

  const removeCard = (idCard) => {
    // console.log("удаление", idCard)
    const сard = savedCards.find((item) => item.url === idCard)
    // console.log("удаление2", сard)
    const jwt = getToken()
    // const cardFromAllList = JSON.parse(getCardsFromLocSt()).find((item) => item._id === idCard)
    // const currentIdCard = () => currentPath === "/" ? сard._id : idCard
    //console.log(idCard)
    // console.log(сard)
    // console.log(currentIdCard())
    // console.log(currentIdCard)

    api.removeCard(сard._id, jwt)
      .then((res) => {
        const updateArr = savedCards.filter((item) => item._id !== res._id)
        setSavedCards(updateArr)
      })
      .catch((error) => console.log(error))
  }

  const clearErrSignIn = () => setIsSignInOk("")
  const clearErrSignUp = () => setIsRegOk("")
  // open SignIn if click on card for save
  const handlerSignInOnCardClick = () => {
    if (loggedIn) {
      return
    }
    setIsOpenedSignIn(true)
  }

  useEffect(() => {
    const historyCards = JSON.parse(getCardsFromLocSt())
    const countCardsLocSt = getCountFromLocSt()

    if (countCardsLocSt !== countCards) {
      return setCountCards(countCardsLocSt)
    }

    if (countCardsLocSt) {
      setIsVisibleNews(true)
      setCardsListSearch(countCardsHandler(historyCards, countCardsLocSt))
    }
  }, [isRequesting, countCards])

  return (
    <UserContext.Provider value={currentUser}>
      <div className={cn("app", { "app_visible": true })}>
        <Header onAuth={() => setIsOpenedSignIn(true)}
          logOut={logOut}
          loggedIn={loggedIn}
          currentUser={currentUser} />
        <Switch>
          <Route path="/" exact>
            <Main
              searchReq={searchReq}
              isRequesting={isRequesting}
              isServerError={isServerError} />
            {isVisibleNews || isServerError ?
              <ResultSearch
                handlerSignInOnCardClick={handlerSignInOnCardClick}
                savedCards={savedCards}
                loggedIn={loggedIn}
                addCard={addCard}
                removeCard={removeCard}
                isServerError={isServerError}
                isAreResult={cardsListSearch}
                cardsList={cardsListSearch}
                cardsListSearchFull={JSON.parse(getCardsFromLocSt())}
                onClickLoadCards={onClickLoadCards}
                isVisibleNews={isVisibleNews} /> :
              ((isLoading && <PreloaderNews />) || null)}
            <About />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            component={UserPage}
            loggedIn={loggedIn}
            savedCards={savedCards}
            removeCard={removeCard}
            cardsListSearchFull={fun(cardsListSearchFull)} />
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
          clearErr={clearErrSignUp}
          isRequesting={isRequesting}
        />
        <SignIn name="Вход"
          buttonName="Ввойти"
          isOpen={isOpenedSignIn}
          onClose={() => setIsOpenedSignIn(false)}
          onSubmit={onSubmitSignIn}
          changePopup={changePopup}
          isSignInOk={isSignInOk}
          clearErr={clearErrSignIn}
          isRequesting={isRequesting}
        />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App;
