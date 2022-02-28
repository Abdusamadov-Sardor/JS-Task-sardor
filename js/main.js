var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elCard = document.querySelector(".card")
var elCardSpan = document.querySelector(".card__span")
var elCardSpanS = document.querySelector(".card__span1")
var elCardSpanC = document.querySelector(".card__span2")
var elCardSpanE = document.querySelector(".card__span3")


var elOnFoot = 3.6;
var elBicycle = 20.1;
var elCar = 70;
var elAirplane = 800;

if(elFormInput >= 0 ){
  console.log("0 dan katta raqam kiriting");
}

elForm.addEventListener("submit", function(eve){
  eve.preventDefault();
 
  var elCardMinut = (" minut");
  var elInputVal = (elFormInput.value);
  

  elCardSpan.textContent =  (`${elOnFoot * elInputVal + elCardMinut}`);
  
  

})



elForm.addEventListener("submit", function(eve){
  eve.preventDefault();
  
  var elCardMinut = (" minut");
  var elInputVal = (elFormInput.value);
  

  elCardSpanS.textContent = (`${elBicycle * elInputVal + elCardMinut}`)
 
})




elForm.addEventListener("submit", function(eve){
  eve.preventDefault();

  var elCardMinut = (" minut");
  var elInputVal = (elFormInput.value);
 

  elCardSpanC.textContent = (`${elCar * elInputVal + elCardMinut}`)

})


elForm.addEventListener("submit", function(eve){
  eve.preventDefault();

  var elCardMinut = (" minut");
  var elInputVal = (elFormInput.value);
  

  elCardSpanE.textContent = (`${elAirplane * elInputVal + elCardMinut}`)
  
})