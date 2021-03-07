const numberOfBulbs = 20;
const delay = 500;

let counter = 0;
let arrayOfBulbs = [];

// Creating the bulbs
while (counter < numberOfBulbs) {
    const newEl = document.createElement('div');
    newEl.className = 'bulb';
    document.getElementById('bulbs').appendChild(newEl);

    arrayOfBulbs[counter] = false;
    counter++;
}

// Reset the pointer back to the first bulb
counter = 0;
arrayOfBulbs[counter] = true; // Initial bulb
document.getElementsByClassName('bulb')[counter].classList.add('active');

setInterval(() => {
    // Switch off the current bulb
    arrayOfBulbs[counter] = false;

    document.getElementsByClassName('bulb')[counter].classList.remove('active');


    // Unless it is already the last bulb...
    if (counter < numberOfBulbs - 1) {
        counter++; // ...get the next bulb in the array
    } else {
        counter = 0; // Reset
    }

    arrayOfBulbs[counter] = true;

    document.getElementsByClassName('bulb')[counter].classList.add('active');


    console.clear();
    console.log(arrayOfBulbs);
}, delay);
