// let log = console.log;

function Pizza(sizeCost, toppingsCost){
  this.sizeCost =sizeCost;
  this.toppingsCost = toppingsCost;
};

// let Pizza1 = new Pizza(12, 4);
// console.log(Pizza1);
let P2 = new Pizza(12,[1,1,5,1]);
// console.log(P2);

Pizza.prototype.total = function(){
  let totalCost = this.sizeCost + this.toppingsCost
  // console.log(totalCost)
  return totalCost
};

let toppingsArray = [];
let newArray= []
function arraySum(toppingsArray){  
  
  for (let i = 0; i < toppingsArray.length; i++); {
    newArray.push(parseInt(toppingsArray));    
    
    
    console.log(newArray);

  };
  let toppingsCost = toppingsArray.reduce((a, b) => a + b, 0);
  return toppingsCost;
};


// user logic
let Pizza1 = new Pizza();
$(document).ready(function() {
  console.log("first pizza" +Pizza1);
  $("form#toppings_survey").submit(function(event) {
    console.log("form sub");
    event.preventDefault();
    $("input:checkbox[name=pizza_toppings]:checked").each(function() {
      const allPizzaToppings= $(this).val();
      toppingsArray.push(allPizzaToppings);
       
      
    });
  });
});





// Pizza.prototype.toppings= function(){
//   // debugger
//   console.log(toppingsCost);
//   return toppingsCost
// }
