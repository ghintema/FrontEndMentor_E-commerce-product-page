



const myFunction = (event) => {
    event.classList.toggle("change");
    let right = (window.innerWidth - document.body.clientWidth -16) / 2;
    let navigation = document.getElementById('navigation');
    navigation.classList.toggle("nav-open");
    navigation.style.marginRight = `${right}px`;
}

let display = document.getElementById('number-of-items');
const test = (n) => {
    console.log(n);
    let current = parseInt(display.innerHTML);

    if ( current > 0 || (current === 0 & n === 1) ) {
        current += n;
        display.innerHTML = current;
    }
    
};


// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("add-to-cart");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the banner to insert as modal-content
let banner = document.getElementById("banner")

// When the user clicks on the button and mediaquery match, open the modal
let x = window.matchMedia("(min-width: 990px)")
btn.onclick = function() {
    if (x.matches) { // If media query matches
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() { modal.style.display = "none"}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

