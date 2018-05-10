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

function settingUpdates() {
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

}

updateLevelElement.addEventListener("click", settingUpdates);

function billSettingTotal() {
  var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadio) {
    var billItemTypeWithSettings = checkedRadio.value;

          setBill.calc(billItemTypeWithSettings);
          console.log(billItemTypeWithSettings)

    }
  
       setBill.getTotal();
      var total = setBill.returnTotal();
      var warningThresh =setBill.setWarn(warningLevel.value);
      var criticalThresh = setBill.setCrit(criticalLevel.value);

         console.log(warningThresh)
        // var criticalThresh = setBill.critical();
      callTotal.innerHTML = setBill.getCALL();
      smsTotal.innerHTML = setBill.getSMS();
      settingsTotal.innerHTML = setBill.returnTotal();

      if (total >= warningThresh) {
        settingsTotal.classList.add("warning");
      }
      if (total >= criticalThresh) {
        settingsTotal.classList.add("danger");
      }
      else if (total < warningThresh) {
        settingsTotal.classList.remove("warning");
      }
      else if (total < warningThresh) {
        settingsTotal.classList.remove("danger");
      }
     }




addSettingsBtn.addEventListener("click", billSettingTotal);
