var Pizza = function(quantity) {
  this.option = [0,0,0];
  this.quantity = quantity;
  this.option[0] = quantity;
};

Pizza.prototype.addToppings = function(quantity) {
  this.option[1] = quantity;
  this.toppings = this.option[1];
};

Pizza.prototype.size = function(size) {
  this.option[2] = size;
  this.size = this.option[2];
};

Pizza.prototype.price = function() {
  var size = this.size;
    if (size === 0) {
      size = 7;
    } else if (size === 1) {
      size = 9;
    } else {
      size = 11;
    }
  return this.price = this.quantity * (this.toppings + size);
};

$(document).ready(function(){
  $("#result").hide();
  $('form#pizza-party').submit(function(event){
    event.preventDefault();
    var pizzaQuantity = parseInt($('#quantity').val());
    var newPizza = new Pizza(pizzaQuantity);
    var toppingNo = $("input:checkbox:checked").length;
    newPizza.addToppings(toppingNo);
    var pizzaSize = parseInt($('#size').val());
    newPizza.size(pizzaSize);
    var result = newPizza.price();
    $("#price-price").text(result);
    $("#result").show();
  });

});
