const TOKEN_KEY = "jwt";
const USER_DATA = "user";
const KEYWORD = "keyword";


export const setKeyword = (keyword) => localStorage.setItem(KEYWORD, keyword)
export const getKeyword = () => localStorage.getItem(KEYWORD)
export const removeKeyword = () => localStorage.removeItem(KEYWORD)

export const setUserData = (data) => {
  localStorage.setItem(USER_DATA, JSON.stringify(data))
}

export const getUserData = () => localStorage.getItem(USER_DATA)

// export const removeUserData = () => localStorage.removeItem(USER_DATA)

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);