export default function countdownTick(endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - new Date();

  if (distance < 0)
    return false;

  let days = formatDate(Math.floor(distance / day), "Day", true);
  let hours = formatDate(Math.floor((distance % day) / hour), "Hour");
  let minutes = formatDate(Math.floor((distance % hour) / minute), "Minute");
  let seconds = formatDate(Math.floor((distance % minute) / second), "Second");

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