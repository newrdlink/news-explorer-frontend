module.exports = (arr, count) => {
  if (!arr) {
    return
  }
  const newArr = arr.slice(0, count)
  return newArr
};