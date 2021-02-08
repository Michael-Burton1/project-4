// Business logic
//Logic for orders


// logic for pizzas
function Pizza(toppings, size, price){
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.additonalCost= function(){
  let sum= 0;
  toppingsCost.forEach(function(element) {
    sum += element;
    console.log(sum)
    this.toppings.push(sum);
  });
};  




// User logic
$(document).ready(function() {
  $("form#toppings_survey").submit(function(event) {
    toppingsArray= []
    event.preventDefault();
    //make pizza object
    $("input:checkbox[name=pizza_toppings]:checked").each(function() {
      const allPizzaToppings= $(this).val();
      toppingsArray.push(allPizzaToppings)
      let toppingsCost = toppingsArray.map((i) => Number(i));
      debugger
      // .additionalCost();
      console.log(toppingsCost);
      
    });
    
  });
});


// use  pizzaOject.additionalcost







// function Orders() {
//   this.pizzas = {};
//   this.currentID = 0;
// }

// Orders.prototype.addOrder= function(pizza){
//   pizzaID =this.assignID();
//   this.pizzas[pizza.id] = pizza;
//   console.log(ugh);
// }