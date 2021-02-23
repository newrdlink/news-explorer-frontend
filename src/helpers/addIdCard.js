module.exports = (arr, keyword) => {
  let count = 0;
  console.log(keyword)
  const newArr = arr.map((element) => {
    element._id = count++
    element.keyword = keyword
    return element
  });
  return newArr
}