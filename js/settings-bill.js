function SettingCost(){
  var callCostSet = 0;
  var smsCostSet = 0;
  var warningLevelSet = 0;
  var criticalLevelSet = 0;

// create a variables that will keep track of all three totals.
  var totalCall = 0;
  var totalSms = 0;
  var totally = 0;


  function costcallSet(value){
     callCostSet = parseFloat(value);
   }
   function costsmsSet(cost){
     smsCostSet = parseFloat(cost);
   }

  function costwarnSet(warning){
      warningLevelSet =parseFloat(warning);
  }

  function costcritSet(critical){
  criticalLevelSet = parseFloat(critical);

  }

function updateSettings(items){

    if(items === "call"){
                totalCall += callCostSet;
        }
    else if(items === "sms"){
              totalSms += smsCostSet;
         }

     }

  function phoneCall(){
     return  totalCall.toFixed(2);

  }

  function sentSms(){
    return  totalSms.toFixed(2);

  }

  function Warninglevel(){
    return Warninglevel;
  }

  function Criticallevel(){
    return Criticallevel;
  }

  function Calllevel(){
    return Callleveltype.toFixed(2);
  }
  function Smslevel(){
    return Smsleveltype.toFixed(2);
  }

  function billsTotal(){
   totally = totalCall + totalSms;
     return totally.toFixed(2);
        }


  function passesCritical(){
    return billsTotal() >= Criticallevel();
  }

  function passesWarning(){
    return billsTotal() >= Warninglevel();
  }

  // function reachedWarningLevel(){
  //   return passesWarning() = 'red' && passesWarning() = 'orange'

  // }

  return {
    setTotal:updateSettings,
    setCalls: phoneCall,
    setSms: sentSms,
    costcallSet,
    costsmsSet,
    costwarnSet,
    costcritSet,

    Criticallevel,
    Warninglevel,
    passesWarning,
    passesCritical,
    setTotals: billsTotal,

    }
}
