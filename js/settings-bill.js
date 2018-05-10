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
   function costsmsSet(value){

      smsCostSet = parseFloat(value);
    }
    function costwarnSet(value){
   warningLevelSet = parseFloat(value);
   return  warningLevelSet;
   }
   function costcritSet(value){
    criticalLevelSet = parseFloat(value);
    return criticalLevelSet;
   }

//get the values

  function updateSettings(items){
    if(totally < criticalLevelSet ){
    if(items === "call"){
                totalCall += callCostSet;

         }
    else if(items === "sms"){
              totalSms += smsCostSet;
               // totally += smsCostSet;
         }
       }
    }



  function getCall(){
     return totalCall.toFixed(2);
  }
  function getSms(){
    return totalSms.toFixed(2);
  }

  function getWarning(){
    return criticalLevelSet.toFixed(2);
  }

  function getCritical(){
    return criticalLevelSet.toFixed(2);
  }



//calcualte and return total bill
  function billsTotal(){
    totally = totalCall + totalSms;

  }

  function returntotal(){
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
         warning :getWarning,
         critical :getCritical,

        calc : updateSettings,
        getCALL : getCall,
        getSMS : getSms,
        getTotal : billsTotal,
         passesWarning,
        passesCritical,
        returnTotal:returntotal,
    }
}
