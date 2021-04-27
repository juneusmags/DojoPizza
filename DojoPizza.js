function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deepdish","traditional","mozerella", ["peperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozerella", "feta"],["mushrooms", "olives", "onions"],)
console.log(pizza2);