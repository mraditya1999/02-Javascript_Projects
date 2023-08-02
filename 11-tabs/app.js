const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const contents = document.querySelectorAll('.content');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const id = e.currentTarget.dataset.id;

    btns.forEach(function (btn) {
      if (btn.dataset.id === id) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    contents.forEach(function (content) {
      if (id === content.id) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

// about.addEventListener('click', function (e) {
//   const id = e.target.dataset.id;

//   // remove active from other btns
//   if (id) {
//     btns.forEach(function (btn) {
//       btn.classList.remove('active');
//     });

//     // remove active from other contents
//     contents.forEach(function (content) {
//       content.classList.remove('active');
//     });

//     const element = document.getElementById(id);
//     element.classList.add('active');
//     e.target.classList.add('active');
//   }
// });
