// Business Logic

function Pizza(size, veggies, proteins) {
    this.size = size;
    this.veggies = veggies;
    this.proteins = proteins;
}

Pizza.prototype.pizzaCost = function () {
    let totalCost = 0;
    if (this.size === "small") {
        totalCost += 15;
    } else if (this.size === "medium") {
        totalCost += 20;
    } else if (this.size === "large") {
        totalCost += 25;
    }

    this.veggies.forEach(function (veggie) {
        if (veggie.includes("green-peppers") || veggie.includes("jalapenos") || veggie.includes("pineapple") || veggie.includes("onions") || veggie.includes("mushrooms")) {
            totalCost += 0.50;
        }
    });
    this.proteins.forEach(function (protein) {
        if (protein.includes("sausage") || protein.includes("pepperoni") || protein.includes("chicken") || protein.includes("veggie-sausage")) {
            totalCost += 2;
        }
    })
    return totalCost.toFixed(2);
}

// UI Logic
function handleOrder(event) {
    event.preventDefault();
    const inputSize = document.getElementById("pizza-size").value;
    const inputVeggies = document.querySelectorAll("input[name=veggies]:checked");
    const inputProtein = document.querySelectorAll("input[name=proteins]:checked");
    let veggieArray = Array.from(inputVeggies);
    const veggies = [];
    veggieArray.forEach(function (element) {
        veggies.push(element.value);
    });
    let proteinArray = Array.from(inputProtein);
    const proteins = [];
    proteinArray.forEach(function (element) {
        proteins.push(element.value);
    });
    let pizzaOrder = new Pizza(inputSize, veggies, proteins);
    let costOf = pizzaOrder.pizzaCost()
    document.querySelector("div#receipt").removeAttribute("class", "hidden");
    document.querySelector("span#total").innerText = ("$" + costOf);
    document.getElementById("submit").disabled = true;
    document.getElementById("reset").disabled = true;
};

function clearOrder(event) {
    document.querySelector("button.delete").removeAttribute("id");
    document.querySelector("div#receipt").setAttribute("class", "hidden");
    document.getElementById("submit").disabled = false;
    document.getElementById("reset").disabled = false;
}

window.addEventListener("load", function () {
    document.querySelector("form#order").addEventListener("submit", handleOrder);
    document.querySelector("button.delete").addEventListener("click", clearOrder);
});
