describe('radioBill DOM function', function(){

  it('Should return the total cost of the calls ', function(){
          var userTotal = TotalRadio();
          userTotal.addedbill('call');

          assert.equal(userTotal.addedCalls(), 2.75);
    });

  it('Should return the total cost of the sms ', function(){
          var userTotal = TotalRadio();
          userTotal.addedbill('sms');

          assert.equal(userTotal.addedSms(), 0.65);
    });

    it('Should give the total amount of calls that are made ', function(){
            var userTotal = TotalRadio();
            userTotal.addedbill('call');
            userTotal.addedbill('call');

            assert.equal(userTotal.addedCalls(),5.50);
     });
});
