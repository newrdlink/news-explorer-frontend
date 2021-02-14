module.exports = (arr) => {
  let count = 0;
  const newArr = arr.map((element) => {
    element._id = count++
    return element
  });
  return newArr
}