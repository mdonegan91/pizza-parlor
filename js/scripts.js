// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.pizzaCost = function () {
    let pizzaCost = 0;
    if (this.size === "Small") {
        pizzaCost += 15;
    }
    else if (this.size = "Medium") {
        pizzaCost += 20;
    }
    else if (this.size = "Large") {
        pizzaCost += 20;
    }
}