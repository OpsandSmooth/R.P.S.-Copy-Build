
let userScore= 0;
let compScore= 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const sissors_div = document.getElementById('s');

function getCompChoice(){
  const choices = ['r','p','s'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function convert(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Sissors';
}

function win(user, comp) {
userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
result_div.innerHTML
= convert(user)
+ ' beats ' + convert(comp) + '. you win! ! !';
document.getElementById(user).classList.add('green-glow');
setTimeout(function() {document.getElementById(user)
.classList.remove('green-glow')
}, 800);
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML
  = convert(comp)
  + ' beats ' + convert(user) + '. you lose! ! !';
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {document.getElementById(user)
  .classList.remove('red-glow')
  }, 800);
}

function draw(user, comp) {
  result_div.innerHTML
  = convert(user)
  + ' is ' + convert(comp) + '. It"s a draw! ! !';
  document.getElementById(user).classList.add('orange-glow');
  setTimeout(function() {document.getElementById(user)
  .classList.remove('orange-glow')
  }, 800);
}


function game(userChoice) {
const compChoice = getCompChoice();
switch (userChoice + compChoice) {
  case 'rs':
  case 'pr':
  case 'sp':
  win(userChoice, compChoice);
  break;
  case 'rp':
  case 'ps':
  case 'sr':
  lose(userChoice, compChoice);
  break;
  case 'rr':
  case 'pp':
  case 'ss':
  draw(userChoice, compChoice);
  break;
}
}


function main() {
rock_div.addEventListener('click', function() {
  game('r')
})
paper_div.addEventListener('click', function() {
  game('p')
})
sissors_div.addEventListener('click', function() {
  game('s')
})
}

main();
