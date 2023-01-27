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