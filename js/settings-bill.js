function SettingCost(){
  var callCostSet = 0;
  var smsCostSet = 0;
  var warningLevelSet = 0;
  var criticalLevelSet = 0;

// create a variables that will keep track of all three totals.
  var totalCall = 0;
  var totalSms = 0;
  var totally = 0;
  //Setting values
  function costcallSet(value){
     callCostSet = parseFloat(value);
   }
   function costsmsSet(cost){
     smsCostSet = parseFloat(cost);
   }

  function costwarnSet(warning){
      warningLevelSet = parseFloat(warning);
  }
  function costcritSet(critical){
       criticalLevelSet = parseFloat(critical);
  }
  //get the values
  function getCall(){
     return totalCall.toFixed(2);
  }
  function getSms(){
    return totalSms.toFixed(2);
  }
  function getWarning(){
    return warninglevelSet.toFixed(2);
  }

  function getCritical(){
    return criticallevelSet.toFixed(2);
  }

  //calculate calls and sms
  function updateSettings(items){
    if(items === "call"){
                totalCall += callCostSet;
                 // totally += callCostSet;
         }
    else if(items === "sms"){
              totalSms += smsCostSet;
               // totally += smsCostSet;
         }
    }
//calcualte and return total bill
  function billsTotal(){
    totally = totalCall + totalSms;
    return totally.toFixed(2);
  }
  //returns true if the critical is reached
  function passesCritical(){
    return (billsTotal()>= criticalLevelSet);
  }
  //returns true if the warning is reached
  function passesWarning(){
    return (billsTotal() >=  warningLevelSet);
  }


  return {
        setCall : costcallSet,
        setSMS :  costsmsSet,
        setWarn : costwarnSet,
        setCrit : costcritSet,

        calc : updateSettings,
        getCALL : getCall,
        getSMS : getSms,
        getTotal : billsTotal,
        checkWarning : passesWarning,
        criticalLevelSet,
        warningLevelSet,
        checkCritical : passesCritical
    }
}
