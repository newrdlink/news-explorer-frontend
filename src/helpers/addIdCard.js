module.exports = (arr) => {
  let count = 0;
  let newArr = arr.map((element) => {
    element.id = count++
    return element
  });
  return newArr
}