
function checkCanSend() {
  var sendButton = document.querySelector('.team-estimate__send-button');

  var form = document.getElementById('team-estimate-form');
  var radioGroups = document.querySelectorAll('.team-estimate-criteria__marks');
  var checkedRadiosCount = calcRadioCheckedCount(form);
  var textAreas = document.querySelectorAll('.team-estimate-criteria__area__text');
  var filledAreasCount = calcFilledAreasCount(form);

  var isValidForm = radioGroups.length === checkedRadiosCount && textAreas.length === filledAreasCount;
  isValidForm ? sendButton.classList.remove('disabled') : sendButton.classList.add('disabled');
}

function calcRadioCheckedCount(form) {
  var count = 0;
  var inputs = form.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked){
      count ++;
    }
  }
  return count;
}

function calcFilledAreasCount(form) {
  var count = 0;
  var areas = form.getElementsByTagName('textarea');
  for (var i = 0; i < areas.length; i++) {
    if (areas[i].value){
      count ++;
    }
  }
  return count;
}

