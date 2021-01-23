import moment from 'moment';

const periodDate = "&from=" + moment().add(-7, 'days').format("YYYY-M-D") + "&to=" + moment().format("YYYY-M-D");

export default periodDate;
