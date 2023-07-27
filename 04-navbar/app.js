// classList - shows/gets all classes
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// toggle - toggles class
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

//contains - checks classList for specific class
// navToggle.addEventListener('click', function () {
//   if (links.classList.contains('show-links'))
//     links.classList.remove('show-links');
//   else links.classList.add('show-links');
// });
