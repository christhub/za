describe("Pizza", function() {
  it('will add 2 pizzas', function() {
    var testZa = new Pizza(2);
    expect(testZa.quantity).to.equal(2);
  });
  it('will add a topping', function(){
    var testZa = new Pizza(2);
    testZa.addToppings(2);
    expect(testZa.toppings).to.equal(2);
  });
  it('will add a size', function(){
    var testZa = new Pizza(2);
    testZa.size(2);
    expect(testZa.size).to.equal(2);
  });
  it('will price the pizza', function(){
    var testZa = new Pizza(2);
    testZa.addToppings(2);
    testZa.size(1);
    testZa.price();
    expect(testZa.price).to.equal(22);
  });
});
