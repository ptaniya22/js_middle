//a - первая переменная
//b - вторая переменная
//с - третья переменная
let midNumb = document.querySelector('.number-item-mid');
let maxNumb = document.querySelector('.number-item-max');
let minNumb = document.querySelector('.number-item-min');
let a = +prompt('Enter first number');
console.log('a = ', a);
let b = +prompt('Enter second number');
console.log('b = ', b);
let c = +prompt('Enter third number');
console.log('c = ', c);

if ((a > b && b > c) || (a < b && b < c)) {
  alert('Average number is b');
  console.log('Average number is b');
  midNumb.textContent = b;
  if (a > c) {
    maxNumb.textContent = a;
    minNumb.textContent = c;
  } else {
    maxNumb.textContent = c;
    minNumb.textContent = a;
  }
} else if ((b > c && c > a) || (b < c && c < a)) {
  alert('Average number is c');
  console.log('Average number is c');
  midNumb.textContent = c;
  if (b > a) {
    maxNumb.textContent = b;
    minNumb.textContent = a;
  } else {
    maxNumb.textContent = a;
    minNumb.textContent = b;
  }
} else if ((c > a && a > b) || (c < a && a < b)) {
  alert('Average number is a');
  console.log('Average number is a');
  midNumb.textContent = a;
  if (c > b) {
    maxNumb.textContent = c;
    minNumb.textContent = b;
  } else {
    maxNumb.textContent = b;
    minNumb.textContent = c;
  }
} else {
  alert('The average  number does  not exist');
  console.log('The average  number does  not exist');
  midNumb.textContent = 'The average  number does  not exist';
  maxNumb.textContent = 'The average  number does  not exist';
  minNumb.textContent = 'The average  number does  not exist';
}
