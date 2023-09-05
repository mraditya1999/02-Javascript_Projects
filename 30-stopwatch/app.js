const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');
const cnt = document.getElementById('count');

let [hour, minute, second, count] = [0, 0, 0, 0];
let timer = false;

// Format a number as a two-digit string with leading zeros
function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

// Update the time display
function updateTime() {
  hr.textContent = formatNumber(hour);
  min.textContent = formatNumber(minute);
  sec.textContent = formatNumber(second);
  cnt.textContent = formatNumber(count);
}

// Start the stopwatch
function start() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 10);
  }
}

// Stop the stopwatch
function stop() {
  if (timer) {
    clearInterval(timer);
    timer = false;
  }
}

// Reset the stopwatch
function reset() {
  stop();
  [hour, minute, second, count] = [0, 0, 0, 0];
  updateTime();
}

// Update the stopwatch
function updateStopwatch() {
  count++;

  if (count === 100) {
    second++;
    count = 0;
  }

  if (second === 60) {
    minute++;
    second = 0;
  }

  if (minute === 60) {
    hour++;
    minute = 0;
    second = 0;
  }

  updateTime();
}
