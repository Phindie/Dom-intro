describe('textBill DOM function', function(){

  it('Should return the amount of calls ', function(){
          var userBill = Texttotal();
          userBill.addAmount('call');


          assert.equal(userBill.addCalls(), 2.75);

    });

      it('Should return the total amount of sms', function(){
            var userBill = Texttotal();
            userBill.addAmount('sms');


          assert.equal(userBill.addSms(), 0.65);

     });

     it('Should give the total amount of calls and sms that are made ', function(){
             var userBill = Texttotal();
             userBill.addAmount('call');

             userBill.addAmount('sms');

             assert.equal(userBill.addCalls(), 2.75);
             assert.equal(userBill.addTotals(), 3.40);

       });

       it('Should return the total amount of sms that are sent', function(){
             var userBill = Texttotal();
             userBill.addAmount('sms');
             userBill.addAmount('sms');
             userBill.addAmount('sms');

           assert.equal(userBill.addSms(), 1.95);

      });
  });
