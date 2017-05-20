let dateUntil = (endDate) => {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - new Date(); //distance = endDate - current date

  if (distance < 0) {
    return false;
  }

  let days = formatDate(Math.floor(distance / day), "day", true);
  let hours = formatDate(Math.floor((distance % day) / hour), "hour", true);
  let minutes = formatDate(Math.floor((distance % hour) / minute), "minute", true);

  let removeSecondsFromCouner = !(days || hours || minutes); // De-Morgan FTW - only remove the seconds bar after is 0.
  let seconds = formatDate(Math.floor((distance % minute) / second), "second", removeSecondsFromCouner);

  return [
    days,
    hours,
    minutes,
    seconds
  ];
}

let formatDate = function formatDate(dateNumber, timeFix, removeOnZero) {
 if (dateNumber < 1 && removeOnZero)
   return false

  let title = `${timeFix}${dateNumber != 1 ? 's' : ''}`;
  return {
    number: dateNumber,
    title: title
  }
}

module.exports = {
    dateUntil: dateUntil
}