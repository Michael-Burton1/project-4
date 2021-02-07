let log = console.log;

function Pizza(sizeCost, toppingsCost){
  this.sizeCost =sizeCost;
  this.toppingsCost = toppingsCost;
};

let Pizza1 = new Pizza(12, 4);
console.log(Pizza1);

Pizza.prototype.totalCost = function(){
  let totalCost = this.sizeCost + this.toppingsCost
  console.log(totalCost)
  return totalCost
}