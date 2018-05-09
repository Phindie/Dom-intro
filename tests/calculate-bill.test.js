describe('calculateBill DOM function', function(){
  it('Should return the total amount of each call', function(){
  assert.equal(calculateBillEvent("call"), 2.75);
  });

  it('It should return the total amount of each sms',function(){
  assert.equal(calculateBillEvent("sms"),0.75);
 });

 it('It should return the total amount of a call and sms',function(){
 assert.equal(calculateBillEvent("call,sms"), 3.50);
});

it('It should return no amount for something else if not calls or sms',function(){
assert.equal(calculateBillEvent("sugar"), 0.00);

   });

 });
