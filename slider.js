// Getting elements
const slide = document.getElementsByClassName('all-slides')[0] // [0] to turn html-collection into single Element.
const buttonNext = document.getElementById('button-next');
const buttonPrev = document.getElementById('button-prev');
const gallery = document.getElementById('thumbnail-gallery-')
let slides = document.getElementsByClassName('slide')

let intervalID;
let intervalTime = 2500;

// Making clones: First two and last two slides need be cloned.
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Giving Id's to the clones
firstClone.id = 'firstClone';
lastClone.id = 'lastClone';

// .prepend and .append need be called on the parent DOM-Element. 
slides[0].parentElement.prepend(lastClone);
slides[0].parentElement.append(firstClone);


let index = 1; // setting start-point to original first slide. 
slide.style.left = `-${index}00%`

// width adaption according to numer of slides
slide.style.width = `${slides.length}00%`
for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = `${100/slides.length}%`
}

// FUNCTION DEFINITION

const thumbNailHighlighting = (index) => {
    console.log(index);
    gallery.children[0].style.opacity = '1';
    gallery.children[1].style.opacity = '1';
    gallery.children[2].style.opacity = '1';
    gallery.children[3].style.opacity = '1';
    if (index === 5) {
        gallery.children[0].style.opacity = '0.3'    
    }
    gallery.children[index - 1].style.opacity = '0.3'
}

const moveOn = (step) => { 
    if (index >= slides.length - 1) {return} // prevents fast overclicking beyond last slide
    if (index < 1 ) {return} // prevents fast underclicking below first slide
    index += step;
    slide.style.transition = '0.6s ease';
    //slide.style.transform = `translateX(-${slideWidth * index }px)`
    slide.style.left = `-${index}00%`
    thumbNailHighlighting(index);
}



const goTo = (target) => {
    index = target;
    thumbNailHighlighting(index)
    slide.style.transition = '0.6s ease';
    //slide.style.transform = `translateX(-${slideWidth * index }px)`
    slide.style.left = `-${index}00%`
}

function reset() {
    if (slides[index].id === 'firstClone') {
        index = 1;
        slide.style.transition = 'none';
        //slide.style.transform = `translateX(${ - slideWidth * index}px)`
        slide.style.left = `-${index}00%`;
    }

    if (slides[index].id === 'lastClone') {
        index = slides.length - 2;
        slide.style.transition = 'none';
        //slide.style.transform = `translateX(${ - slideWidth * index}px)`
        slide.style.left = `-${index}00%`;
    }
}

const startAutoPlay = () => {
    intervalID = setInterval(() => {
    moveOn(1)
    },intervalTime)
}

const stopAutoPlay = () => {
    clearInterval(intervalID);
}



// FUNCTION INVOCING
startAutoPlay();
buttonNext.addEventListener('click',() => {moveOn(1)});
buttonPrev.addEventListener('click',() => {moveOn(-1)});

// Resetting the slide at the end or beginning for emulating the loop.
slide.addEventListener('transitionend', reset);
slide.addEventListener('transitionend', thumbNailHighlighting(index));
buttonNext.addEventListener('mouseenter', stopAutoPlay);
buttonPrev.addEventListener('mouseenter', stopAutoPlay);
slide.addEventListener('mouseenter', stopAutoPlay);
gallery.addEventListener('mouseenter', stopAutoPlay);
gallery.addEventListener('mouseleave', startAutoPlay);
slide.addEventListener('mouseleave', startAutoPlay);


slide.addEventListener('swiped-left', () => {moveOn(1)});
slide.addEventListener('swiped-right', () => {moveOn(-1)});