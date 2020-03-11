// after index.js is processed
//       ✓ no longer has DOM node 'main#main'
//       1 has a 'newHeader' variable that points to node 'h1#victory'
//       2 has a 'newHeader' variable that points to node 'h1#victory'
//       3 has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

let removeMain = document.querySelector("main#main")

removeMain.remove()

// 1 has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")

//       3 has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

newHeader.innerHTML = `YOUR-NAME is the champion`





