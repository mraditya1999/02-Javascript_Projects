const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const deadlineCount = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// const futureDate = new Date(2023, 6, 31, 2, 45, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes} am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const giveAwayEndsTime = futureTime - currentTime;

  const oneDay = 24 * 60 * 60 * 1000; //time in ms
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let daysLeft = Math.floor(giveAwayEndsTime / oneDay);
  let hoursLeft = Math.floor((giveAwayEndsTime % oneDay) / oneHour);
  let minutesLeft = Math.floor((giveAwayEndsTime % oneHour) / oneMinute);
  let secondsLeft = Math.floor((giveAwayEndsTime % oneMinute) / 1000);

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  function format(value) {
    if (value < 10) return (value = `0${value}`);
    return value;
  }

  deadlineCount.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (giveAwayEndsTime < 0) {
    clearInterval(countdownId);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway is expired</h4>`;
  }
}

let countdownId = setInterval(getRemainingTime, 1000);
getRemainingTime();
