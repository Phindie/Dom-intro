//get a reference to the calculate button
var calculatedBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

// do this for all the DOM elements
function calculateBillEvent(bill){
  //split the string
  var billItems = bill.split(",");
  // a variable for the total phone bill.
   var billTotal = 0;
  //loop over all the bill items
  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();

      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }
  return billTotal.toFixed(2);
}

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    // console.log(billString);
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
     var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();

        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }

    //round to two decimals
    var roundedBillTotal = calculateBillEvent;
    // console.log(roundedBillTotal);
    billTotalElement.innerHTML = roundedBillTotal;

    if (roundedBillTotal >= 20 && roundedBillTotal <= 30){
           //billTotalElement.classList.add("warning");
           billTotalElement.style.color = "orange";

       }
       else if (roundedBillTotal >= 30){

            //billTotalElement.classList.add("danger");
            billTotalElement.style.color = "red";
       }

       if(roundedBillTotal < 20){
         billTotalElement.classList.remove("warning");
      }
      else if (roundedBillTotal < 30){

       billTotalElement.classList.remove("danger");
      }

}

 calculatedBtn.addEventListener('click',calculateBtnClicked);
