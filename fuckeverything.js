// window.onload = function () 
// {
//     document.body.appendChild(FuckingElem);
// }



(function()
{
    var navItems = [{href: '../index.html', text: "home"},{href: "../Pages/projs.html", text: 'projs'},{href: '../Pages/random.html', text: 'random'}];


   var oooElem = document.createElement("nav");
   var uList = document.createElement("ul");
   var newItem;
   var newLink;
  
    oooElem.appendChild(uList);

    for (var i = 0; i < uList.length(); i++) 
        {
        newItem = document.createElement("li");
        newLink = document.createElement("a");
  
        newLink.href = navItems[i].href;
        newLink.innerHTML = navItems[i].text;
  
        newItem.appendChild(newLink);
        uList.appendChild(newItem);

        }
        // uList.children[0].className = "current";

      // callin function
         window.onload = function() 
             {
                document.body.appendChild(oooElem);
             }
  
    }());