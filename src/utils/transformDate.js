import moment from 'moment';

const month = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря',
}

export const dateStr = (date) => {
  const str = date.slice(0, 10);
  const dateObj = moment(str, "YYYY-MM-DD");
  const dateStr = dateObj._d.getDate() + ' ' + month[dateObj._d.getMonth()] + ', ' + dateObj._d.getFullYear()
  return dateStr
};
