let car = {
              type: "Audi",
              year: 2000,
              ownerName: "Minna",
              city: "Helsinki",
              calcAge; function() {
                            this.age = 2021 - this.year;
                            return this.age;
              }
}

console.log(car);

console.log(car.year);

car.color = "Red";

console.log(car);

car.city = "Espoo";

console.log(car);

delete car.city;

console.log(car);

let text = document.querySelector("p");

text.textContent = car.color;

// text.textContent=`Your car is $(car.type), $(car.color), year $car.year), and is (calcAge() old´;



