// Single element selectors

console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element selectors

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// loop through

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');


// Changing dom

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Bob';
ul.lastElementChild.innerHTML = "<h1>What's up!</h1>";

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').firstElementChild.innerHTML = '<h1>Hey!!</h1>';
});
