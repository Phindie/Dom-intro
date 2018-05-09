describe('settingsBill DOM function', function(){

  it('Should return the total cost of the calls ', function(){
          var setBill = SettingCost();

          setBill.getCALL(3.00);

          setBill.calc('call');

       assert.equal(setBill.setCall(), );
  });

it('Should return the total cost of the sms ', function(){
         var setBill = SettingCost();

          setBill.getSMS(1.00);

          setBill.calc('sms');
          setBill.calc('sms');
          setBill.calc('sms');
          setBill.calc('sms');

        assert.equal(setBill.setSMS(),);
  });

});
