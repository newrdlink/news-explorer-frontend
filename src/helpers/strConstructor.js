module.exports = (arr) => {

  if (arr.length === 0) {
    return console.log("У вас нет карточек")
  }

  const keywordsObj = arr.reduce((arr, news) => {
    const keyword = news.keyword

    if (Object.keys(arr).find((item) => item === keyword)) {
      arr[keyword] = arr[keyword] + 1
      return arr
    }
    arr[keyword] = 1
    return arr
  }, {})

  const newArr = Object.entries(keywordsObj)

  newArr.sort((a, b) => {
    return b[1] - a[1]
  })

  const arrLength = newArr.length

  if (arrLength > 3) {
    return ` ${newArr[0][0]}, ${newArr[1][0]} и ${newArr.length - 2}-м другим`
  }
  if (arrLength === 3) {
    return ` ${newArr[0][0]}, ${newArr[1][0]} и ${newArr[2][0]}`
  }
  if (arrLength === 2) {
    return ` ${newArr[0][0]} и ${newArr[1][0]}`
  }

  return ` ${newArr[0][0]}.`
}
