// get a reference to the sms or call radio buttons
var billItemType = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBill = document.querySelector(".radioBillAddBtn");
var callsTotalEle = document.querySelector(".callTotalTwo");
var smsTotalEle = document.querySelector(".smsTotalTwo");
var  totalElem = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill

var callsTotal = 0;
var smsTotal = 0;
 var totals = 0;

//add an event listener for when the add button is pressed
function radioBillTotal(){
    // get the value entered in the billType textfield
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value

   }

  if (billItemType === "call"){
       callsTotal += 2.75;
}
else if (billItemType === "sms"){
    smsTotal += 0.65;
  }


//update the totals that is displayed on the screen.
callsTotalEle.innerHTML = callsTotal.toFixed(2);
smsTotalEle.innerHTML = smsTotal.toFixed(2);
var totals = smsTotal + callsTotal;
totalElem.innerHTML = totals.toFixed(2);

// var totals = textBill.toFixed(2);
if (totals >= 30 && totals <= 50){
      // adding the danger class will make the text red
      totalElem.classList.add("warning");
  }
  else if (totals >= 50){
      totalElem.classList.add("danger");
  }
  // else if
  //   radioBill.addEventListener('click', function(){
  //        alert(" are designed for representing lists of multiple items when only one selection is appropriate")
  //      });
  //
}

radioBill.addEventListener("click", radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
