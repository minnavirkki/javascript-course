const DELAY = 500;

let randomNumber = 0;

// 1. CREATION OF DOM CONTENT
// FIRST METHOD
// document.write('<h1>Bye bye</h1>')

// SECOND METHOD
// const newEl = document.createElement('h2');
// newEl.innerText = 'Hello from h2';
// newEl.id = 'message';
// newEl.className = 'class1 class2'
// newEl.classList.add('active', 'chosen', 'hidden', 'class1');
// newEl.classList.remove('class1');
// document.body.appendChild(newEl);

// 2. SELECTING DOM CONTENT

document.getElementById('city-selector')

// document.getElementsByClassName('choice')

// document.getElementsByTagName('div')

// // Get all elements on page according to their CSS selectors

// document.querySelectorAll('#city-selector')

// document.querySelectorAll('.choice')

// document.querySelectorAll('div')

// To choose both elements, separate by comma.
//document.querySelectorAll('#city-selector, .choice')

// To choose all elements inside a city selector:
//document.querySelectorAll('#city-selector, .choice')

// Direct child of a city selector
//document.querySelectorAll('#city-selector > .choice')

// To select only one element. Ie.First direct child of a city selector
//document.querySelector('#city-selector > .choice')

// 3. MAKING MODIFICATIONS TO DOM CONTENT