//get a reference to the calculate button
var calculatedBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
// do this for all the DOM elements


function calculateBtnClicked(){

    var billString = billStringElement.value;

  var roundedBillTotal = calculateBillEvent(billString);

  billTotalElement.innerHTML = roundedBillTotal;

    if (roundedBillTotal > 30){
           billTotalElement.style.color = 'crimson';

       }
       else if (roundedBillTotal >= 20){

            billTotalElement.style.color = 'orange';
       }


      else if (roundedBillTotal < 20){

       billTotalElement.style.color = 'black';
      }
    }


calculatedBtn.addEventListener('click',calculateBtnClicked);
