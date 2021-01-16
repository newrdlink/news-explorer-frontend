import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Preloader from '../Preloader';
import cn from 'classnames';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cardsListSaved } from '../../config/cardsList';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import RegIsOk from '../RegIsOk/RegIsOk';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { setToken, getToken, removeToken } from "../../utils/Token";
import apiAuth from "../../utils/Auth";
import NotFound from '../NotFound/NotFound';


const App = () => {
  const [isOpenedSignUp, setIsOpenedSignUp] = useState(false);
  const [isOpenedSignIn, setIsOpenedSignIn] = useState(false);
  const [isOpenedRegIsOk, setIsOpenedRegIsOk] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isVisibleNews, setIsVisibleNews] = useState(false);
  const [isRegOk, setIsRegOk] = useState(true)

  const [cardsListSearch, setCardsListSearch] = useState([])
  // const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    name: "",
    loggedIn: false,
    savedNews: [],
  })


  useEffect(() => {
    const jwt = getToken()
    if (jwt) {
      apiAuth.pullUserData(jwt)
        .then((res) => {
          setCurrentUser((currentUser) => (
            { ...currentUser, "name": res.name, "loggedIn": true, "savedNews": cardsListSaved }))
        })
        .catch((error) => {
          removeToken()
          console.log(error)
        })
    }
  }, [])

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
    setIsloading(true)
    apiAuth.signIn(data)
      .then((res) => {
        setToken(res.token)
        apiAuth.pullUserData(res.token)
          .then((res) => {
            setCurrentUser((currentUser) => (
              { ...currentUser, "name": res.name, "loggedIn": true, "savedNews": cardsListSaved }))
            setIsOpenedSignIn(false)
          })
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

  const searchReq = (evt) => {
    evt.preventDefault()
    setIsVisibleNews(true)
  }

  const logOut = () => {
    // history.goBack()
    setCurrentUser({ loggedIn: false })
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className={cn("app", { "app_visible": true })}>
        <Preloader isLoading={isLoading} />
        <Header onAuth={() => setIsOpenedSignIn(true)}
          logOut={logOut}
          currentUser={currentUser} />
        <Switch>
          <Route path="/" exact>
            <Main searchReq={searchReq} />
            {cardsListSearch.length === 0 ?
              <NotFound isVisibleNews={isVisibleNews} /> :
              <NewsCardList cardsList={cardsListSearch} isVisibleNews={isVisibleNews} />}
            <About />
          </Route>
          <Route path="/saved-news">
            <SavedNewsHeader />
            <NewsCardList cardsList={currentUser.savedNews} />
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
