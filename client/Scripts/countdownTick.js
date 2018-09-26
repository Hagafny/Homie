export default function countdownTick(endDate) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const distance = endDate - new Date();

  if (distance < 0) return false;

  const formatDate = function formatDate(dateNumber, timeFix) {
    const title = `${timeFix}${dateNumber !== 1 ? 's' : ''}`;
    return {
      number: dateNumber,
      title
    };
  };

  const days = formatDate(Math.floor(distance / day), 'Day', true);
  const hours = formatDate(Math.floor((distance % day) / hour), 'Hour');
  const minutes = formatDate(Math.floor((distance % hour) / minute), 'Minute');
  const seconds = formatDate(Math.floor((distance % minute) / second), 'Second');

  return [days, hours, minutes, seconds];
}
