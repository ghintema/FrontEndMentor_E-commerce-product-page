// Benötigte Funktionen:

const updateCart() {
    Wieviel waren sind schon im Korb?
    Wieviel waren sollen hinzugefügt werden?
}

const change(n) {
    let current = document.getElementById('number-of-items').innerHTML
    current = parseInt(current);
    if (current > 0 ) {
        current += n;
        document.getElementById('number-of-items').innerHTML = ${current};
    }
}
