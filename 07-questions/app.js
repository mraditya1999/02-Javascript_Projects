// traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     btns.forEach(function (b) {
//       if (b !== btn) b.parentNode.parentNode.classList.remove('show-text');
//     });
//     btn.parentElement.parentElement.classList.toggle('show-text');
//   });
// });

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (ques) {
      if (ques !== question) ques.classList.remove('show-text');
    });
    question.classList.toggle('show-text');
  });
});
