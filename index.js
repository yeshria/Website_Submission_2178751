   
   
   
   
    var nextQuote = document.getElementById("jackquote");
    var nextSauce = document.getElementById("authrr");

    var i=0;

    var quotes = [];
    var sauces = [];

    var doWantFade = false;


window.onload = temp();

/*fadeOutEffect();  /////////////////////////////attempt 1

window.setInterval(function(){
  
  nextQuote.innerHTML = quotes[i];
  nextSauce.innerHTML = sauces[i];
  
  i = NextNum(i);
  
  
},5000);

fadeInEffect(); ///////////////////////////make sep func*/
function temp()
{
    displayQuote();
    window.setInterval(function(){
      chang();
    },6000);
   // FadingShtuff();
   //fadeInEffect();

}

/*
window.setInterval(function(){
  chang();
},5000);
FadingShtuff();
*/

function chang()
{
  //fadeOutEffect();
  nextQuote.innerHTML = quotes[i];
  nextSauce.innerHTML = sauces[i];
  
  i = NextNum(i);
 // fadeInEffect();
}

function displayQuote()
{
  {
    quotes[0] = "Young, Beautiful, and Caffinated";
    sauces[0] = "- Jack Rathbone, 13/04/2022";

    quotes[1] = "You are a source of constant chaos embodying entropy";
    sauces[1] = "- Thomas Oostuizhen, 07/09/2020";

    quotes[2] = "A remarkably insightful person with a great imagination and fun sense of humour";
    sauces[2] = "- Che Carpede, 20/04/2022";

    quotes[3] = "The sort of awesome I wish the majority of people were";
    sauces[3] = "- Ashley Michael Dirk Swanepoel, 02/02/2019";

    quotes[4] = "Best witch in the coven and also pretty good at programming";
    sauces[4] = "- Jenna Caitlyn Dunford, 20/04/2019";

    quotes[5] = "Dark empress that rules over all humankind";
    sauces[5] = "- Matthew Currin, 07/10/2019";

    quotes[6] = "Yeshria is undeniably odd, yet delightfully entertaining";
    sauces[6] = "- Shafiek Ismail, 20/04/2019";
  }
}

/*
function fadeOutEffect() {
  var fadeTarget = document.getElementById("jackquote");
  var fadenextTarget = document.getElementById("authrr");

  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
          fadenextTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.08;
          fadenextTarget.style.opacity -= 0.08;
      } else {
          clearInterval(fadeEffect);
      }
  }, 500);
}

function trialFade()
{
  var fadeTarget = document.getElementById("jackquote");
  var fadenextTarget = document.getElementById("authrr");

  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) 
      {
          fadeTarget.style.opacity = 1;
          fadenextTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0 && doWantFade == false) 
      {
          fadeTarget.style.opacity -= 0.08;
          fadenextTarget.style.opacity -= 0.08;
      } 
      if (fadeTarget.style.opacity < 1 && doWantFade == true)
      {
        fadeTarget.style.opacity += 0.08;
        fadenextTarget.style.opacity += 0.08;

      }
      else {
          clearInterval(fadeEffect);
      }
  }, 500);
}  

function fadeInEffect() {
  var fadeInTarget = document.getElementById("jackquote");
  var fadeInnextTarget = document.getElementById("authrr");

  var fadesEffect = setInterval(function () {
   /*   if (fadeInTarget.style.opacity) {
          fadeInTarget.style.opacity = 0;
          fadeInnextTarget.style.opacity = 0;
      }
      if (fadeInTarget.style.opacity < 1) {
          fadeInTarget.style.opacity += 0.1;
          fadeInnextTarget.style.opacity += 0.1;
      } else {
          clearInterval(fadesEffect);
      }
  }, 500);
} */

function NextNum(currNum)
  {
      if (currNum >= 6)
      {
        return 0;
      }
      else if (currNum < 6)
      {
        return currNum+1;
      }
  }