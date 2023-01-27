# Pizza Parlor

##### By _Molly Donegan_

#### _Object-Oriented Javascript Independent Project_

_A web application: Users are prompted to build a pizza with their toppings of choice. On submit, the total cost of the pizza is calculated using JavaScript objects and methods, and printed on the screen._

## Technologies Used

* JavaScript
* HTML / CSS

## Github Pages Site



## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html in your browser_

## Tests
```
Describe: Pizza()

Test: It should return a Pizza object with for size, veggies, and proteins.
Code: let pizza = new Pizza("medium", "onions", ["pepperoni", "sausage"]);
    pizza;
Expected Output: Pizza { size: "medium", veggies: "onions", protein: ["pepperoni", "sausage"] }

Describe Pizza.prototype.pizzaCost()

Test: It should return the price of a small pizza.
Code: let pizza = new Pizza("small", [], []);
      pizza.pizzaCost();
Expected Output: 15.00

Test: It should return the price of a medium pizza.
Code: let pizza = new Pizza("medium", [], []);
      pizza.pizzaCost();
Expected Output: 20.00

Test: It should return the price of a large pizza.
Code: let pizza = new Pizza("large", [], []);
      pizza.pizzaCost();
Expected Output: 25.00

Test: It should increase the total cost by $.50 if onions are added.
Code: let pizza = new Pizza("large", ["onions"], []);
    pizza.pizzaCost();
Expected Outut: 25.50

Test: It should increase the total cost by $.50 for each veggie topping added.
Code: let pizza = new Pizza("large", ["onions", "jalapenos"], []);
    pizza.pizzaCost();
Expected Outut: 26.00

Test: It should increase the total cost by $2 each protein topping added.
Code: let pizza = new Pizza("large", ["onions", "jalapenos"], ["sausage", "pepperoni"]);
    pizza.pizzaCost();
Expected Outut: 30.00
```

## Known Bugs

* NA

## License

* _MIT_

Copyright (c) _2023_ _Molly Donegan_







