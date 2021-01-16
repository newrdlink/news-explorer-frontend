export const isValidForms = (obj, arr) => {
  if (Object.keys(obj).some(item => obj[item] === false))
    return false;
  if (arr.length === Object.keys(obj).length) {
    return true;
  }
  return false
}
