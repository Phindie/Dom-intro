
var textBillElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBill = document.querySelector(".addToBillBtn");

var callsTotalElement = document.querySelector(".callTotalOne") ;
var smsTotalElement = document.querySelector(".smsTotalOne") ;
var totalCostElement = document.querySelector(".totalOne") ;

var userBill = Texttotal()

function textBillTotal(){

    var textBill = textBillElem.value;

    userBill.addAmount(textBill);

    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = userBill.addCalls();
    smsTotalElement.innerHTML = userBill.addSms();
    totalCostElement.innerHTML = userBill.addTotals();


    if (userBill.addTotals() >= 50){
          totalCostElement.classList.add("danger");
      }
      else if (userBill.addTotals() >= 30){
          totalCostElement.classList.add("warning");
          }
          else if(userBill.addTotals()< 20){

          }

   }



addToBill.addEventListener("click", textBillTotal);
