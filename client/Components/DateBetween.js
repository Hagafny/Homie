let DateBetween = (startDate, endDate) => {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  let days = formatDate(Math.floor(distance / day), "day");
  let hours = formatDate(Math.floor((distance % day) / hour), "hour");
  let minutes = formatDate(Math.floor((distance % hour) / minute), "minute");
  let seconds = formatDate(Math.floor((distance % minute) / second), "second");

  return [
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  ];
}

let formatDate = function formatDate(dateNumber, timeFix) {
  if (dateNumber <= 0)
    return false;

  let title = `${timeFix}${dateNumber > 1 ? 's' : ''}`;


  return {
    number: dateNumber,
    title: title
  }
}
module.exports = DateBetween
