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



     //alert("in function");

   //  for (var i = 0; i < uList.length; i++) 
   //      {
   //      newItem = document.createElement("li");
   //      // uList.appendChild(newItem);
   //      // newItem.appendChild(newLink);

   //      newLink = document.createElement("a");
   //      uList.appendChild(newLink);
    
   //      newLink.body.href = navItems[i].href;
   //      newLink.body.innerHTML = navItems[i].text;

   //      uList.appendChild(newLink);
  
   //      // newItem.appendChild(newLink);
   //      uList.appendChild(newItem);
   //      // alert("in loop");

   //      }

      //   console.log(uList.children);
      //    uList.children[0].classList.add("current");

      // callin function
         window.onload = function() 
             {
                document.body.appendChild(oooElem);
             }
  
    }());


