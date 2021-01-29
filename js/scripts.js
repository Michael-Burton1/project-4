// Business logic
// logic for pizzas
 function pizza(pizzaNum, toppings, size, price){
   this.pizzaNum = pizzaNum;
   this.toppings = toppings;
   this.size = size;
   this.price = price;
 }

toppingsArray= []

 // User logic
 $(document).ready(function() {
   $("form#toppings_survey").submit(function(event) {
     event.preventDefault();
     $("input:checkbox[name=pizza_toppings]:checked").each(function() {
       const allPizzaToppings= $(this).val();
      toppingsArray.push(allPizzaToppings)
       console.log(allPizzaToppings);
      });
    });
  });