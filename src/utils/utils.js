const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  if (res.status === 409) {
    return Promise.reject(`Ошибка: ${res.status}, email занят`)
  }
  return Promise.reject(`Извините, ошибка: ${res.status}`);
};

export default handleResponse;
