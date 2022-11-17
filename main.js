//GETTING ALL NECESSARY ELEMENTSpreviewpreview
let navigation = document.getElementById('navigation');
let hamburger = document.getElementById('hamburger');
let contentList = document.getElementById('content-list-');
let numberInCart = document.getElementById('number-of-items-in-cart');
let totalPrice = document.getElementById('total-price-in-cart');
let emptyMessage = document.getElementById('empty');
let checkoutButton = document.getElementById('checkout-button');
let deleteButton = document.getElementById('delete-cart');
let updateCartButton = document.getElementById('add-to-cart');
let closeCartButton = document.getElementById('close-cart');
let shoppingCartButton = document.getElementById('icon-of-shopping-cart');
let numberOfItemsToAdd = document.getElementById('number-of-items-to-add');
let cartPreview = document.getElementById('cart-preview');

//DEFINITON OF SOME VARIABLES
let numberInCartInt = parseInt(numberInCart.innerHTML);
let numberOfItemsToAddInt = parseInt(numberOfItemsToAdd.innerHTML);
let totalPriceInt = parseInt(totalPrice.innerHTML);

//DEFINITION OF FUNCTIONS

// This function is invoced with clicking the hamburger-icon
const myFunction = (event) => {
    // changing the hamburger-icon to cross and back
    event.classList.toggle("change");
    navigation.classList.toggle("nav-open");
    if (hamburger.getAttribute('aria-expanded') === 'true') {
        hamburger.setAttribute('aria-expanded', 'false');
    } else { hamburger.setAttribute('aria-expanded', 'true')}

    if (navigation.getAttribute('aria-hidden') === 'true') {
        navigation.setAttribute('aria-hidden', 'false');
    } else { navigation.setAttribute('aria-hidden', 'true')}

    // let right = (window.innerWidth - document.body.clientWidth - 16 ) / 2;
    // navigation.style.marginRight = `${right}px`;
}


// This function is invoced with "+" and "-" buttons
const collect = (n) => {
    console.log(n);
    let current = parseInt(numberOfItemsToAdd.innerHTML);

    if ( numberOfItemsToAddInt > 0 || (numberOfItemsToAddInt === 0 & n === 1) ) {
        numberOfItemsToAddInt += n;
        numberOfItemsToAdd.innerHTML = numberOfItemsToAddInt;
    }
};



const deleteCart = () => {
    console.log('delete invoked');
    contentList.style.display = 'none';
    checkoutButton.style.display = 'none';
    emptyMessage.style.display = 'block';
    numberInCart.innerHTML = 0;
    totalPrice.innerHTML = 0;
    numberInCartInt = 0;
    totalPriceInt = 0;
}

const openCartPreview = () => {
    cartPreview.style.display = 'block'
    cartPreview.setAttribute('aria-hidden', 'false')
    shoppingCartButton.setAttribute('aria-expanded', 'true')
}

const closeCartPreview = () => {
    cartPreview.style.display = 'none'
    cartPreview.setAttribute('aria-hidden', 'true')
    shoppingCartButton.setAttribute('aria-expanded', 'false')
}


const updateCart = () => {
    console.log('updateCart invoced')
    if (numberOfItemsToAddInt > 0) {
        numberInCartInt += numberOfItemsToAddInt;
        totalPriceInt = numberInCartInt * 125;

        emptyMessage.style.display = 'none';
        contentList.style.display = 'flex';
        checkoutButton.style.display = 'block';
        numberInCart.innerHTML = numberInCartInt;
        totalPrice.innerHTML = `$${totalPriceInt}.00`;

        openCartPreview();
    }

    // if checkout is beeing pressed, i could do another window saying "Payment is beeing processed... Thanks for trying... Check out all my other projects on .... ........!!"
}


deleteButton.addEventListener('click',deleteCart);
closeCartButton.addEventListener('click', closeCartPreview);
emptyMessage.addEventListener('click', closeCartPreview);
updateCartButton.addEventListener('click', updateCart);
//shoppingCartButton.addEventListener('mouseover', openCartPreview)
shoppingCartButton.addEventListener('click', openCartPreview)
//shoppingCartButton.addEventListener('mouseout', closeCartPreview)







// MODAL IS NOT ACTIVATED IN THIS PROJECT //

// Get the modal
let modal = document.getElementById("modal");
let modalContent = document.getElementById('modal-content-')

// Get the button that opens the modal
//let btn = document.getElementById("add-to-cart");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the banner to insert as modal-content
let banner = document.getElementById("banner").cloneNode(true);

// When the user clicks on the button and mediaquery match, open the modal
let x = window.matchMedia("(min-width: 990px)")
btn.onclick = function() {
    if (x.matches) { // If media query matches
        modal.style.display = "block";
    }
}

x.addListener(() => {
    if(x.matches) {
        navigation.setAttribute('aria-hidden', 'false');

    } else {
        navigation.setAttribute('aria-hidden', 'true');
    }
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() { modal.style.display = "none"}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






