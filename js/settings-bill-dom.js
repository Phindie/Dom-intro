// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callCostType = document.querySelector(".callCostSetting");
var smsCostType = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");
//get a reference to the 'Update settings' button
var updateLevelElement = document.querySelector(".updateSettings");
// get refences to all the settings fields
var callTotal = document.querySelector(".callTotalSettings");
var smsTotal = document.querySelector(".smsTotalSettings");
//get a reference to the add button
var addSettingsBtn = document.querySelector(".addButton");
var settingsTotal = document.querySelector(".totalSettings");

// create a variables that will keep track of all the settings
 var setBill = SettingCost();

 updateLevelElement.addEventListener("click", settingUpdates);

function settingUpdates(){

    var callType = callCostType.value;

    var smsType = smsCostType.value;
    var warningType = warningLevel.value;

    var criticalType = criticalLevel.value;



  setBill.costcallSet(callType);
  console.log(setBill.costcallSet(callType))
 setBill.costsmsSet(smsType);
  console.log(setBill.costsmsSet(smsType))
  setBill.costwarnSet(warningType);
  setBill.costcritSet(criticalType);


  if(setBill.settotal() > setBill.warningLevelSet()){
  settingsTotal.style.color = "orange";
  }
  else if(setBill.settotal() > setBill.criticalLevelSet()){
     settingsTotal.style.color = "red";
  }
  else if(setBill.settotal() < setBill.warningLevelSet()){
     settingsTotal.style.color = "black";
    }
  }

 // if (setUserBill.total() > setUserBill.settingWarningBill()){
 //      settingTotalElem.style.color = 'orange';

 //    }else if (setUserBill.total() > setUserBill.settingCriticalBill()) {
 //      settingTotalElem.style.color = 'red';

 //    }else if (setUserBill.total() < setUserBill.settingWarningBill()) {
 //      settingTotalElem.style.color = 'black';
 //    }

function billSettingTotal(){

  var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadio){
     var billItemTypeWithSettings = checkedRadio.value;
  setBill.setTotal(billItemTypeWithSettings);
}
  // if (setBill.passesCritical()) {
  //          settingsTotal.style.color = 'red';
  //        }
  //       else{
 


   var overTotal = setBill.setTotals();
   callTotal.innerHTML = setBill.setCalls();
   console.log(callTotal)
   smsTotal.innerHTML = setBill.setSms();
   settingsTotal.innerHTML = overTotal;


//    if(overTotal  > setBill.warningLevelSet()){
//    settingsTotal.style.color = "orange";
//    }
// else if(overTotal> setBill.criticalLevelSet()){
//       settingsTotal.style.color = "red";
//    }

if(setBill.setTotal() > setBill.warningLevelSet()){
  settingsTotal.style.color = "orange";
}else if(setBill.setTotal() > setBill.criticalLevelSet()){
   settingsTotal.style.color = "red";
}
 }
 // if (setUserBill.total() > setUserBill.settingWarningBill()){
 //            // adding the danger class will make the text red
 //            settingTotalElem.style.color = 'orange';
 //          }else if (setUserBill.total() > setUserBill.settingCriticalBill()) {
 //            settingTotalElem.style.color = 'red';
 //          }





addSettingsBtn.addEventListener("click", billSettingTotal);
