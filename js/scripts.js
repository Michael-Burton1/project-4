// Business logic
//Logic for orders

function Orders() {
  this.pizzas = {};
  this.currentID = 0;
}

Orders.prototype.addOrder= function(pizza){
  pizzaID =this.assignID();
  this.pizzas[pizza.id] = pizza;
}
// logic for pizzas
 function pizza(pizzaNum, toppings, size, price){
   this.pizzaNum = pizzaNum;
   this.toppings = toppings;
   this.size = size;
   this.price = price;
 }


  // pizza.prototype.assignId = function() {
  //   this.currentId += 1;
  //   return this.currentId;
  // }

toppingsArray = []
let toppingsTotalArray = toppingsArray.map();

 // User logic
 $(document).ready(function() {
   $("form#toppings_survey").submit(function(event) {
     event.preventDefault();
     $("input:checkbox[name=pizza_toppings]:checked").each(function() {
       const allPizzaToppings= $(this).val();
      toppingsArray.push(allPizzaToppings)
       console.log(allPizzaToppings);
      });
      // toppingsArray.forEach(function(element) {
      //   sum += element;
    });
  });