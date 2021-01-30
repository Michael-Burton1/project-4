// Business logic
//Logic for orders

function Orders() {
  this.pizzas = {};
  this.currentID = 0;
}

Orders.prototype.addOrder= function(pizza){
  pizzaID =this.assignID();
  this.pizzas[pizza.id] = pizza;
  console.log(ugh);
}


// logic for pizzas
function Pizza(pizzaNum, toppings, size, price){
  this.pizzaNum = pizzaNum;
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.additonalCost= function(){
  let sum= 0;
  toppingCost.forEach(function(element) {
    sum +=element;
    console.log(sum)
    this.toppings.push(sum);
  });
};  
toppingsArray = []


    

  // User logic
$(document).ready(function() {
  $("form#toppings_survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=pizza_toppings]:checked").each(function() {
      const allPizzaToppings= $(this).val();
      toppingsArray.push(allPizzaToppings)
      let toppingsCost = toppingsArray.map((i) => Number(i));
      this.additionalCost();
      console.log(AdditionalCost);

    });
    
  });
});