// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
    let pizzaCost = 0;
    if (this.size === "small") {
        pizzaCost += 15;
    }
    else if (this.size = "medium") {
        pizzaCost += 20;
    }
    else if (this.size = "large") {
        pizzaCost += 20;
    }
    return pizzaCost;
}