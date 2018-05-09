describe('settingsBill DOM function', function(){

  it('Should return the total cost of the calls ', function(){
          var setBill = SettingCost();

          setBill.costcallSet(3);
          
          setBill.setTotal('call');

       assert.equal(setBill.setCalls(), 3);
  });

it('Should return the total cost of the sms ', function(){
         var setBill = SettingCost();

          setBill.costsmsSet(1.00);

          setBill.setTotal('sms');
          setBill.setTotal('sms');
          setBill.setTotal('sms');
          setBill.setTotal('sms');

        assert.equal(setBill.setSms(), 4.00);
  });

});
