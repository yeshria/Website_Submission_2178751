// window.onload = function () 
// {
//     document.body.appendChild(FuckingElem);
// }



(function()
{
    var navItems = [{href: '../index.html', text: 'Home'},{href: '../Pages/projs.html', text: 'Projs'},{href: '../Pages/random.html', text: 'Skills'}];


   var oooElem = document.createElement("nav");
   document.body.appendChild(oooElem);
   console.log(oooElem);

   var uList = document.createElement("ul");

   uList = oooElem.appendChild(uList);

   var newItem = document.createElement("li");
    newItem = uList.appendChild(newItem);
   var newLink = document.createElement("a");
   newLink.href = '../index.html';
   newLink.innerHTML = 'home';
   newLink = uList.appendChild(newLink);
   //newItem.appendChild(newLink);




      // callin function
         window.onload = function() 
             {
                document.body.appendChild(oooElem);
             }
  
    }());


