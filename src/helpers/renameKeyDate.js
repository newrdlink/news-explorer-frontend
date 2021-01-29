const fun = (arr = []) => {
  let newArr = arr.map(element => {
    const { publishedAt: date, urlToImage: image } = element;
    return { ...element, date, image }
  });
  return newArr
}

export default fun;
