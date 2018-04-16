// get a reference to the textbox where the bill type is to be entered
var textBillElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBill = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
// var totalCostElem = document.querySelector(".textBillTotal")
var callsTotalElement = document.querySelector(".callTotalOne") ;
var smsTotalElement = document.querySelector(".smsTotalOne") ;
var totalCostElement = document.querySelector(".totalOne") ;


var callsTotal = 0;
var textSms = 0;
var billTotal = 0;

// the event listener is declared below here
function textBillTotal(){
    // get the value entered in the billType textfield
    var textBill = textBillElem.value;
    // update the correct total
    if (textBill === "call"){
        callsTotal += 2.75;
    }
    else if (textBill === "sms"){
        textSms += 0.65;

    }

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = textSms.toFixed(2);
      //console.log(smsTotal);
    billTotal = callsTotal + textSms;
    totalCostElement.innerHTML = billTotal.toFixed(2);

// var totalCost = textBill.toFixed(2);
    if (billTotal >= 30 && billTotal <= 50){
          // adding the danger class will make the text red
          totalCostElement.classList.add("warning");
      }
      else if (billTotal >= 50){
          totalCostElement.classList.add("danger");
      }

   }





addToBill.addEventListener("click", textBillTotal);
