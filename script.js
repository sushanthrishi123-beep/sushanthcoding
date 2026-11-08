const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('helloButton').addEventListener('click', () => {
  document.getElementById('helloMessage').textContent = 'Great job! You just used JavaScript.';
});

const editor = document.getElementById('codeInput');
const preview = document.getElementById('codePreview');
const starterCode = editor.value;
function runCode() {
  preview.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;padding:18px;color:#172033}button{background:#6d5ce8;color:white;border:0;padding:8px 12px;border-radius:5px}</style></head><body>${editor.value}</body></html>`;
}
document.getElementById('runCode').addEventListener('click', runCode);
document.getElementById('resetCode').addEventListener('click', () => {
  editor.value = starterCode;
  runCode();
});
runCode();

const options = document.querySelectorAll('.quiz-option');
const feedback = document.getElementById('quizFeedback');
options.forEach(option => option.addEventListener('click', () => {
  options.forEach(item => item.classList.remove('correct', 'wrong'));
  if (option.dataset.answer === 'html') {
    option.classList.add('correct');
    feedback.textContent = 'Correct! HTML gives a webpage its structure. 🎉';
  } else {
    option.classList.add('wrong');
    feedback.textContent = 'Not quite. HTML is the language used to structure webpages. Try again!';
  }
}));
document.getElementById('retryQuiz').addEventListener('click', () => {
  options.forEach(item => item.classList.remove('correct', 'wrong'));
  feedback.textContent = '';
});
