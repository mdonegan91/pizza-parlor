# Pizza Parlor

##### By _Molly Donegan_

#### _Object-Oriented Javascript Independent Project_

_A web application: Users are prompted to build a pizza with their toppings of choice. On submit, the total cost of the pizza is calculated using JavaScript objects and method, and printed on the screen._

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

Test: It should return a Pizza object with two properties for toppings and size
Code: let Pizza = new Pizza("medium", ["pepperoni", "pineapple"]);
Expected Output: Pizza { size: "medium", toppings: ["pepperoni", "pineapple"] }

Describe Pizza.prototype.pizzaCost()

Test: It should return the price of a small pizza.
Code: let pizza = new Pizza("small", []);
      pizza.pizzaCost();
Expected Output: 15.00

Test: It should return the price of a medium pizza.
Code: let pizza = new Pizza("medium", []);
      pizza.pizzaCost();
Expected Output: 20.00

Test: It should return the price of a large pizza.
Code: let pizza = new Pizza("large", []);
      pizza.pizzaCost();
Expected Output: 25.00

Test: It will add $0.50 to the total pizza cost when olives, onions, or pepper toppings are selected.
Code: let pizza = new Pizza(["olives"], "small");
      pizza.pizzaCost();
Expected Output: 15.50

Test: It will add $1.00 to the total pizza cost when tomato or artichoke toppings are selected.
Code: let pizza = new Pizza(["artichoke"], "medium");
      pizza.pizzaCost();
Expected Output: 21.00

Test: It will add $2.00 to the total pizza cost when ham or chicken toppings are selected.
Code: let pizza = new Pizza(["artichoke", "ham"], "medium");
      pizza.pizzaCost();
Expected Output: $23.00
```

## Known Bugs

* NA

## License

* _MIT_

Copyright (c) _2023_ _Molly Donegan_







