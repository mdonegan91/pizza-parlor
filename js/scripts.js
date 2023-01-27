// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
    let totalCost = 0;
    if (this.size === "small") {
        totalCost += 15;
    } else if (this.size = "medium") {
        totalCost += 20;
    } else if (this.size = "large") {
        totalCost += 25;
    }

    this.toppings.forEach(function (topping) {
        if (topping.includes("green-peppers") || topping.includes("jalapenos") || topping.includes("pineapple") || topping.includes("onions") || topping.includes("mushrooms")) {
            totalCost += 0.50;
        }
        if (topping.includes("sausage") || topping.includes("pepperoni") || topping.includes("chicken") || topping.includes("veggie-sausage")) {
            totalCost += 2;
        }
    });
    return totalCost.toFixed(2);
}

// UI Logic
function handleOrder(event) {
    event.preventDefault();
    const inputSize = document.getElementById("pizza-size")
    const inputVeggies = document.querySelectorAll("input[name=veggies]:checked");
    const inputProtein = document.querySelectorAll("input[name=protein]:checked");
    
    let veggieArray = Array.from(inputVeggies);

    const veggies = [];
    veggieArray.forEach(function (element) {
        veggies.push(element.value);
    });

    let proteinArray = Array.from(inputProtein);

    const protein = [];
    proteinArray.forEach(function (element) {
        protein.push(element.value);
    });


    let pizzaOrder = new Pizza(veggies, protein, inputSize);
    let costOf = pizzaOrder.pizzaCost()
    document.querySelector("div#receipt").removeAttribute("class");
    document.querySelector("span#total").innerText = ("$" + costOf);
};

window.addEventListener("load", function () {
    document.querySelector("form#order").addEventListener("submit", handleOrder);
});
