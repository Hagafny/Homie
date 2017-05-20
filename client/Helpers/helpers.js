let dateBetween = (startDate, endDate) => {
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
    days,
    hours,
    minutes,
    seconds
  ];
}

let formatDate = function formatDate(dateNumber, timeFix) {
  let title = `${timeFix}${dateNumber != 1 ? 's' : ''}`;
  return {
    number: dateNumber,
    title: title
  }
}

function setDateTime(date, time) {
    date = new Date(date);
    var index = time.indexOf(":");
    var index2 = nthIndex(time,":", 2);

    var hours = time.substring(0, index);
    var minutes = time.substring(index + 1, index2);

    var mer = time.substring(index2 + 1, time.length);
    if (mer == "PM") {
        hours = hours + 12;
    }

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds("00");

    return date;
};

function nthIndex(str, pat, n){
    var L= str.length, i= -1;
    while(n-- && i++<L){
        i= str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}
module.exports = {
    setDateTime: setDateTime,
    dateBetween: dateBetween
}