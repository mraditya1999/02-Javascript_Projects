const numbers = [...document.querySelectorAll('.number')];

const updateCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);

  let initialValue = 0;

  const clearIntervalId = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      element.textContent = `${value}+`;
      clearInterval(clearIntervalId);
      return;
    }
    element.textContent = `${initialValue}+`;
  }, 1);
};

numbers.forEach((number) => {
  updateCount(number);
});
