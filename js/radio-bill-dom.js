
var billItemType = document.querySelector(".billItemTypeRadio");
var radioBill = document.querySelector(".radioBillAddBtn");
var callsTotalEle = document.querySelector(".callTotalTwo");
var smsTotalEle = document.querySelector(".smsTotalTwo");
var  totalEle = document.querySelector(".totalTwo");


var userTotal = TotalRadio()


function radioBillTotal(){

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value
   }
  userTotal.addedbill(billItemType);


callsTotalEle.innerHTML = userTotal.addedCalls();
smsTotalEle.innerHTML = userTotal.addedSms();
totalEle.innerHTML = userTotal.addedtotal();


if (userTotal.reachedWarningLevel()){
      totalEle.classList.add("warning");
  }
  else if (userTotal.addedtotal() >= 50){
      totalEle.classList.add("danger");
  }
}

radioBill.addEventListener("click", radioBillTotal);
