
var billItemType = document.querySelector(".billItemTypeRadio");

var radioBill = document.querySelector(".radioBillAddBtn");
var callsTotalEle = document.querySelector(".callTotalTwo");
var smsTotalEle = document.querySelector(".smsTotalTwo");
var  totalEle = document.querySelector(".totalTwo");


var userRadio = TotalRadio()


function radioBillTotal(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value
   }

  userRadio.addedbill(billItemType);


callsTotalEle.innerHTML = userRadio.addedCalls();
smsTotalEle.innerHTML = userRadio.addedSms();
totalEle.innerHTML = userRadio.addedtotal();


if (userRadio.reachedWarningLevel()){
      totalEle.classList.add("warning");
  }
  else if (userRadio.addedtotal() >= 50){
      totalEle.classList.add("danger");
  }
}

radioBill.addEventListener("click", radioBillTotal);
