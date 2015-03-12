//Paste into DOM.
setInterval(function(){
  var hiddenButton = $('.secondary > .ng-hide');
  if (hiddenButton.length === 0){
    console.log("On the floor!");
  }else{
    document.getElementsByClassName("secondary")[0].click();
  }
},5000)