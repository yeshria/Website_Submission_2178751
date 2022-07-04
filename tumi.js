// window.onload = function () 
// {
//     document.body.appendChild(FuckingElem);
// }            

//JUST CLARIFYING: I did all the code! It's named Tumi.js to try to make the website THINK Tumi coded it and thus remove all errors :)

(function()
{
    var navItems = [{href: '../index.html', text: 'Home'},{href: '../Pages/projs.html', text: 'Blogs'},{href: '../Pages/random.html', text: 'Skills'},{href: '../Pages/spoopy.html', text: 'Design'}, {href: '../Pages/contact.html', text: 'Projects'}];
    var uList, oooElem, newItem, newLink;

   
   //newItem.appendChild(newLink);



     //alert("in function");

    for (var i = 0; i < navItems.length; i++) 
        {
            
            var oooElem = document.createElement("nav");
            oooElem.classList = "current";
            document.body.appendChild(oooElem);

            console.log(oooElem);
         
            var uList = document.createElement("ul");
         
            uList = oooElem.appendChild(uList);
         
            var newItem = document.createElement("li");
             newItem = uList.appendChild(newItem);
            var newLink = document.createElement("a");
            newLink.href = navItems[i].href;
            newLink.innerHTML = navItems[i].text;
            newLink = uList.appendChild(newLink);

        }

        oooElem.children[0].class.add("current");
      //   console.log(uList.children);
         

      // callin function
         window.onload = function() 
             {
                document.body.appendChild(oooElem);
             }
  
    }());


