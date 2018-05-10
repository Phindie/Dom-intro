describe('settingsBill DOM function', function(){

  it('Should return the total cost of the calls ', function(){
          var setBill = SettingCost();

          setBill.getCALL(3.00);
          setBill.warning(6.00);
          setBill.critical(9.00);

          setBill.calc('call');

        assert.equal(setBill.setCall(), );
        assert.equal(setBill.getTotal(), undefined);
        assert.equal(setBill.passesWarning(), false);
  });

it('Should return the total cost of the sms ', function(){
         var setBill = SettingCost();

          setBill.getSMS(1.00);

          setBill.calc('sms');
          setBill.calc('sms');
          setBill.calc('sms');
          setBill.calc('sms');

        // assert.equal(setBill.setSMS(),4.00);
         assert.equal(setBill.passesWarning(), false);
         assert.equal(setBill.passesCritical(), false);

  });

});
