const fun = (arr = []) => {
  let newArr = arr.map(element => {
    const { publishedAt: date } = element;
    return { ...element, date }
  });
  return newArr
}

export default fun;
