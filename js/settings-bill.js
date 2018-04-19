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
console.log(settingsTotal);
// create a variables that will keep track of all the settings

var callCostSet = 0;
var smsCostSet = 0;
var warningLevelSet = 0;
var criticalLevelSet = 0;

// create a variables that will keep track of all three totals.
var totalCall = 0;
var totalSms = 0;
var totally = 0;


//update function
function updateSettings(){

  var callType = callCostType.value;
  var smsType = smsCostType.value;
  var warningType = warningLevel.value;
  var criticalType = criticalLevel.value;

 callCostSet = parseFloat(callType);
 smsCostSet = parseFloat(smsType);
 warningLevelSet =parseFloat(warningType);
criticalLevelSet = parseFloat(criticalType);
//console.log(smsCostSet)
//console.log(callCostSet)

}
updateLevelElement.addEventListener("click", updateSettings);


//radio function
function billSettingTotal(){

  var checkedRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadio){
     var billItemTypeWithSettings = checkedRadio.value;
    // console.log(checkedRadio);
   }


if (totally >= criticalLevelSet){

}
else{
       if(billItemTypeWithSettings === "call"){
       totalCall += callCostSet;
     }
       else if(billItemTypeWithSettings === "sms"){
     totalSms += smsCostSet;

   }


 }


   //add an event listener for when the add button is pressed
   callTotal.innerHTML = totalCall.toFixed(2);
   //console.log(callTotal)
   smsTotal.innerHTML = totalSms.toFixed(2);
  //  console.log(smsTotal);
   totally = totalCall + totalSms;
   settingsTotal.innerHTML = totally.toFixed(2);
   //console.log(settingsTotal);


  if(totally >= warningLevelSet){
  settingsTotal.classList.add("warning");
  }

  if(totally >= criticalLevelSet){
     settingsTotal.classList.add("danger");

   }


}





addSettingsBtn.addEventListener("click", billSettingTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
