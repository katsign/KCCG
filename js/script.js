'use strict';

// Hamburger Nav

let btn = document.querySelector('.hamburger');
let btnState = true;

btn.onclick = () => {
  if (btnState == true) {
    document.querySelector('.hamburger span').classList.add('toggle');

    document.getElementById('nav').classList.add('sidebarshow');
    btnState = false;
  } else if (btnState == false) {
    document.querySelector('.toggle span').classList.remove('toggle');

    document.getElementById('nav').classList.remove('sidebarshow');
    btnState = true;
  }
}

// Modals

let modal = document.getElementById("modal--pottery");

if (modal == null) {
  modal == null;
} else {

  let trigger = document.getElementById("trigger");

  let span = document.getElementsByClassName("close")[0];

  trigger.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

