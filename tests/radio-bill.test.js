describe('radioBill DOM function', function(){

  it('Should return the total cost of the calls ', function(){
          var userRadio = TotalRadio();
          userRadio.addedbill('call');

          assert.equal(userRadio.addedCalls(), 2.75);

    });

  it('Should return the total cost of the sms ', function(){
          var userRadio = TotalRadio();
          userRadio.addedbill('sms');

          assert.equal(userRadio.addedSms(), 0.65);

    });
    it('Should give the total amount of calls that are made ', function(){
            var userRadio = TotalRadio();
            userRadio.addedbill('call');
            userRadio.addedbill('call');

            assert.equal(userRadio.addedCalls(),5.50);


      });
});
