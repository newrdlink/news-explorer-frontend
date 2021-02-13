import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
// import Preloader from '../Preloader';
import cn from 'classnames';
// import NewsCardList from '../NewsCardList/NewsCardList';
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
  getKeyword
} from "../../utils/Token";
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

const App = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
  const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
  const [isOpenedRegIsOk, setIsOpenedRegIsOk] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isVisibleNews, setIsVisibleNews] = useState(false);
  const [isRegOk, setIsRegOk] = useState("")
  const [isSignInOk, setIsSignInOk] = useState("")

  const [isServerError, setIsServerError] = useState(false);
  const [keyWordApp, setKeyWordApp] = useState("");

  const [cardsListSearchFull, setCardsListSearchFull] = useState([])
  const [countCards, setCountCards] = useState(3);
  const [cardsListSearch, setCardsListSearch] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [savedCards, setSavedCards] = useState([]);

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
      // console.log(200)
      const { user, cards } = userData
      // request for case that user changed cards on other device
      //  const jwt = getToken()
      // api.getInitialCards(jwt)
      //   .then((res) =>
      //     res.length === cards.length ? null : setSavedCards(res)
      //   )
      //   .catch((error) => {
      //     removeToken()
      //     setLoggedIn(false)
      //     setCurrentUser({})
      //     console.log(error)
      //   })
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
    apiAuth.signIn(data)
      .then((res) => {
        setToken(res.token)
        setLoggedIn(true)
        setIsOpenedSignIn(false)
      }
      )
      .catch((error) => {
        setIsSignInOk(error)
      })
    setIsOpenedSignUp(false)
    setIsloading(false)
  };

  const onSubmitSignUp = (data) => {
    apiAuth.signUp(data)
      .then((res) => {
        setIsOpenedSignUp(false)
        setIsOpenedRegIsOk(true)
      }
      )
      .catch((error) => {
        console.log(error)
        setIsRegOk(error)
      })
  }

  const searchReq = (req) => {
    setKeyWordApp(req)
    setKeyword(req)
    setIsServerError(false)
    if (countCards > 3) {
      setCountCards(3)
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
    setLoggedIn(false)
    setCurrentUser({})
    localStorage.clear()
    setIsVisibleNews(false)
    setSavedCards([])
    setCardsListSearch([])
    setCardsListSearchFull([])
  }

  const onClickLoadCards = () => {
    setCountCards(countCards + 3)
  }

  const addCard = (idCard) => {
    const сard = cardsListSearchFull.find((item) => item.url === idCard);
    сard.keyword = keyWordApp || getKeyword();
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

  const removeCard = (idCard) => {
    const jwt = getToken()

    api.removeCard(idCard, jwt)
      .then((res) => {
        const updateArr = savedCards.filter((item) => item._id !== res._id)
        setSavedCards(updateArr)
      })
      .catch((error) => console.log(error))
  }

  const clearErrSignIn = () => setIsSignInOk("")
  const clearErrSignUp = () => setIsRegOk("")

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
        />
        <SignIn name="Вход"
          buttonName="Ввойти"
          isOpen={isOpenedSignIn}
          onClose={() => setIsOpenedSignIn(false)}
          onSubmit={onSubmitSignIn}
          changePopup={changePopup}
          isSignInOk={isSignInOk}
          clearErr={clearErrSignIn}
        />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App;
