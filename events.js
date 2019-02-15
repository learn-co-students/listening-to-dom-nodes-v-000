//variables
const main = document.getElementById('main');
const input = document.querySelector('input');
const divs = document.querySelectorAll('div');


// functions, uncomment to call them: 
addListenerToMain();
addKeydownToInput();
preventG();
// bubble();
// capture();

function addListenerToMain() {
  main.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}

function addKeydownToInput(){
  input.addEventListener('keydown', function(e) {
  console.log(e.which);
  });
}

function preventG() {
  input.addEventListener('keydown',
  function(e) {
    if (e.which === 71) {
      return e.preventDefault();
    }
  });
}

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
  }
  for (let i = 0, l = divs.length; i < l; i++) {
  divs[i].addEventListener('click', bubble);
}

// function capture(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
//   }
//   for (let i = 0, l = divs.length; i < l; i++) {
//   // set the third argument to `true`!
//   divs[i].addEventListener('click', capture, true);
// }


function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0, l = divs.length; i < l; i++) {
  divs[i].addEventListener('click', bubble);
}


