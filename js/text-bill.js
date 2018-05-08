// get a reference to the textbox where the bill type is to be entere
function Texttotal(){
  var callsTotal = 0;
  var textSms = 0;
  var billTotal = 0;

  function billItem(textBill){
       if(textBill === "call"){
        callsTotal += 2.75
  }
      else if (textBill === "sms"){
         textSms += 0.65;
   }
  }


  function displayCall(){
    return  callsTotal.toFixed(2);

  }

  function displaySms(){
    return  textSms.toFixed(2);
     }

     function displayTotal(){
       billTotal = callsTotal+textSms;
       return  billTotal.toFixed(2);
     }


    return {
     addAmount:billItem,
     addCalls:displayCall,
     addSms:displaySms,
     addTotals:displayTotal

    }
}
