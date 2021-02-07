let log = console.log;

function Pizza(sizeCost, toppingsCost){
  this.sizeCost =sizeCost;
  this.toppingsCost = toppingsCost;
};

let Pizza1 = new Pizza(12, 4);
console.log(Pizza1);
let P2 = new Pizza(12,[1,1]);
console.log(P2);

Pizza.prototype.total = function(){
  let totalCost = this.sizeCost + this.toppingsCost
  console.log(totalCost)
  return totalCost
};

Pizza.prototype.toppings= function(){
  let toppingsTotal = this. toppingsCost.reduce((a, b) => a + b, 0);
  console.log(toppingsTotal);
}