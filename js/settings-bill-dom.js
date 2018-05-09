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

function settingUpdates(){
    // geting the values from the dom
    var callType = callCostType.value;
    var smsType = smsCostType.value;
    var warningType = warningLevel.value;
    var criticalType = criticalLevel.value;
    //set the values...
    setBill.setCall(callType);
    setBill.setSMS(smsType);
    setBill.setWarn(warningType);
    setBill.setCrit(criticalType);
    //conditioning the color change...


if(setBill.getTotal() > setBill.checkWarning()){
      settingsTotal.style.color = "orange";
      }
       if(setBill.getTotal() < setBill.checkWarning()){
       settingsTotal.style.color = "black";
       }
      else if(setBill.getTotal() > setBill.checkCritical()){
       settingsTotal.style.color = "red";
      }
  }

    updateLevelElement.addEventListener("click", settingUpdates);
    function billSettingTotal(){
    var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadio){
     var billItemTypeWithSettings = checkedRadio.value;


  if ( setBill.checkCritical()){
       settingsTotal.style.color = "red";
  }
//conditioning the color change...
  else{
    if(billItemTypeWithSettings === 'call'){
        callTotal.innerHTML = setBill.getCALL();
        console.log(callTotal)
      }
      else if(billItemTypeWithSettings === 'sms'){
        smsTotal.innerHTML = setBill.getSMS();
        console.log(smsTotal)
      }

    setBill.calc(billItemTypeWithSettings);

    settingsTotal.innerHTML = setBill.getCALL();
    settingsTotal.innerHTML = setBill.getSMS();
    settingsTotal.innerHTML = setBill.getTotal();


 if(setBill.getTotal() > setBill.checkCritical()){
     settingsTotal.style.color = "red";
    }
      if(setBill.getTotal() > setBill.checkWarning()){
        settingsTotal.style.color = "orange";
      }
     else if(setBill.getTotal() < setBill.checkWarning()){
      settingsTotal.style.color = "black";
       }
     }

   }

}
addSettingsBtn.addEventListener("click", billSettingTotal);
