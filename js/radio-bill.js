
function TotalRadio(){
      var callsTotals = 0;
      var smsTotals = 0;
      var totals = 0;


function billRadio(billTypes){
    if (billTypes === "call"){
       callsTotals += 2.75;
    }

   else if (billTypes === "sms"){
        smsTotals += 0.65;
      }
}


function disCall(){
    return  callsTotals.toFixed(2);

  }

  function disSms(){
    return  smsTotals.toFixed(2);
     }

     function disTotal(){
       totals = callsTotals+smsTotals;
       return  totals.toFixed(2);
     }

  function reachedWarningLevel(){
    return disTotal() >= 30 && disTotal() <= 50
  }
  

  return {
     addedtotal: disTotal,
     addedCalls:disCall,
     addedSms:disSms,
     addedbill: billRadio,
     reachedWarningLevel


    }
}
