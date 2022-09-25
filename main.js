



const myFunction = (event) => {
    event.classList.toggle("change");
    document.getElementById('navigation').classList.toggle("nav-open");
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



