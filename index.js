// Write your code here!
let el = document.getElementById('main');
el.remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Lee is the champion";
document.body.appendChild(newHeader);
