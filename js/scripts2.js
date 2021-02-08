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

// Pizza.prototype.toppings= function(){
//   let toppingsCost = this. toppingsCost.reduce((a, b) => a + b, 0);
//   // debugger
//   console.log(toppingsCost);
//   return toppingsCost
// }

let Pizza1 = new Pizza();
$(document).ready(function() {
  console.log("first pizza" +Pizza1);
  $("form#toppings_survey").submit(function(event) {
    console.log("form sub");
    event.preventDefault();
   Pizza1.sizeCost = 5;
   Pizza1.toppingsCost = 3;
    // debugger
    return Pizza1
  });
});
