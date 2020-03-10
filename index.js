// Write your code here!
// document.body.onload = addElement

let element = document.querySelector('main');
element.remove()

// function addElement(){
//     let newHeader = document.createElement('h1');
//     newHeader.setAttribute("victory", "h1" )
//     let newText = document.createTextNode("YOUR NAME is the champion");
//     newHeader.appendChild(newText)

//     let currentHead = document.getElementById("victory");
//     document.body.insertBefore(newHeader, currentHead);
// }

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "David is the champion"