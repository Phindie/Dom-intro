describe('textBill DOM function', function(){

  it('Should return the amount of calls ', function(){
          var instance = textTotal();
          instance.calls('call');

          assert.equal(instance.addCalls(), 2.75);

    });

      it('Should return the total amount of sms', function(){
            var instance = textTotal();
            instance.sms('sms');


          assert.equal(instance.addSms(), 0.65);

     });

     it('Should give the total amount of calls and sms that are made ', function(){
             var instance = textTotal();
             instance.calls('call');
             instance.sms('sms');

             assert.equal(instance.addCalls(), 2.75);
             assert.equal(instance.addTotals(), 3.40);

       });

       it('Should return the total amount of sms that are sent', function(){
             var instance = textTotal();
             instance.sms('sms');
             instance.sms('sms');
             instance.sms('sms');

           assert.equal(instance.addSms(), 1.95);

      });
  });
