import moment from 'moment';
function date(dateTime) {
  return moment(dateTime).format('YYYY-MM-DD HH:mm');
}

export default { date }